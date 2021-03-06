import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITiket } from '../../../../interfaces/ITiket.interface';
import { TodoItemService } from '../../services/todo-item.service';
import { TodoItemsService } from '../../services/todo-items.service';


@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css'],
  providers: [TodoItemService]
})
export class EditTodoItemComponent implements OnInit, OnDestroy {

  @Output()
  public onSaveSuccess = new EventEmitter();

  public editTask: ITiket;
  private itemId: string;
  public qItems: number;

  constructor(
    private todoItemService: TodoItemService,
    private todoItemsService: TodoItemsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.todoItemsService.getTodos()
      .then((todos) => {
        this.qItems = todos.length;
        console.log('Всего задач', this.qItems);
      });
  }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    // console.log(this.itemId);
    // console.log(this.itemId !== 'new');
    if (this.itemId !== 'new') {
      this.todoItemService.getTiket(Number(this.itemId))
        .then((item) => {
          this.editTask = item;
          // console.log(this.editTask);
        });
    }

    // this.activatedRoute.paramMap.toPromise()
    //   .then((params) => {
    //     this.todoItemService.getTiket(Number(params.get('itemId')))
    //       .then((item) => {
    //         this.editTask = item;
    //         console.log(this.editTask);
    //       });
    //   });

    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params.get('itemId'));
      // console.log(params.get('itemId') !== 'new');
      if (params.get('itemId') !== 'new') {
        this.todoItemService.getTiket(Number(params.get('itemId')))
          .then((item) => {
            this.editTask = item;
            // console.log(this.editTask);
          });
      }
      // console.log(this.editTask);
    });
  }

  ngOnDestroy() {
// 01:05
  }

  public saveFormValues(editTask: ITiket, titleTask: string, descriptionTask: string, statusTask: string) {
    this.todoItemService.setTiket(editTask, titleTask, descriptionTask, statusTask);
    this.onSaveSuccess.emit();
  }

  public saveNewTask(titleTask: string, descriptionTask: string, statusTask: string) {
    this.todoItemService.newTiket(titleTask, descriptionTask, statusTask);
    this.onSaveSuccess.emit();
    // this.router.navigate(['/todo/edit', this.qItems + 1 ]);
  }

}

