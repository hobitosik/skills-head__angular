import { Component, OnInit, ViewChildren, QueryList, Inject, InjectionToken } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoItemComponent } from '../../modules/todo/components/todo-item/todo-item.component';
import { EditTodoItemComponent } from '../../modules/todo/components/edit-todo-item/edit-todo-item.component';

import { ITiket } from '../../interfaces/ITiket.interface';
import { TodoItemsService } from '../../modules/todo/services/todo-items.service';
import { TodoItemService } from '../../modules/todo/services/todo-item.service';

@Component({
  selector: 'app-task-view-container',
  templateUrl: './task-view-container.component.html',
  styleUrls: ['./task-view-container.component.css']
})
export class TaskViewContainerComponent implements OnInit {

  @ViewChildren('sliderItem')
  private editTodoItemComponent: QueryList<EditTodoItemComponent>;

  public todoTikets: ITiket[];

  constructor(
    private todoItemsService: TodoItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.todoTikets = [];
  }

  ngOnInit() {
    this.loadTikets();
  }

  public goTiketEdit(tiket: ITiket) {

    let itemId = tiket.id;
    this.router.navigate(['/todo/edit/', itemId]);
    // console.log(itemId);

  }

  public loadTikets() {

    while (this.todoTikets.length > 0) {
      this.todoTikets.pop();
    }

    // здесь мы берем полученный из сервиса массив задач, пробегаемся по нему, и каждому элементу создаем
    // клон. и этот клон записываем в новую коллекцию todoTikets
    this.todoItemsService.getTodos().forEach(element => {
      const item = Object.assign({}, element);
      this.todoTikets.push(item);
    });
  }

}
