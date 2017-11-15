import { Component, OnInit, ViewChildren, QueryList, Inject, InjectionToken } from '@angular/core';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { EditTiketComponent } from '../edit-tiket/edit-tiket.component';

import { ITiket, TodoItemsService } from '../../services/todo-items.service';
import { TodoItemService } from '../../services/todo-item.service';

export const statusToken = new InjectionToken<string>('STATUS');

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChildren('tiketItemComponent')
  private editTiketComponent: QueryList<EditTiketComponent>;

  public todoTikets: ITiket[];
  public editForms: ITiket[] = [];

  constructor(
    private todoitems: TodoItemsService,
    @Inject(statusToken) public status: any
  ) {
    this.todoTikets = [];
  }

  ngOnInit() {
    this.loadTikets();
  }


  public onTiketEdit(tiket: ITiket) {

    const OPEN_EDIT_TIKETS = 3;

    if (this.editForms.length === OPEN_EDIT_TIKETS) {
      this.editForms.splice(0, 1);
    }

    this.editForms.push(tiket);
  }

  public loadTikets() {

    while (this.todoTikets.length > 0) {
      this.todoTikets.pop();
    }

    // здесь мы берем полученный из сервиса массив задач, пробегаемся по нему, и каждому элементу создаем
    // клон. и этот клон записываем в новую коллекцию todoTikets
    this.todoitems.getTodos().forEach(element => {
      const item = Object.assign({}, element);
      this.todoTikets.push(item);
    });
  }

}
