import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
  ) {
    this.qItems = this.todoItemsService.getTodos().length;
    console.log('Всего задач', this.qItems);
  }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    // console.log(this.itemId);
    if (this.itemId !== 'new') {
      this.editTask = this.todoItemService.getTiket(Number(this.itemId));
      // console.log(this.editTask);
    }

    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params.get('itemId'));
      if (this.itemId !== 'new') {
        this.editTask = this.todoItemService.getTiket(Number(params.get('itemId')));
        // console.log(this.editTask);
      }
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
  }

}

