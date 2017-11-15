import { Injectable } from '@angular/core';
import { ITiket, TodoItemsService } from '../services/todo-items.service';

@Injectable()
export class TodoItemService {

  private todoTiket: ITiket;

  constructor(
    private todoitems: TodoItemsService
  ) {

  }

  // загрузка задачи из LocalStorage по id
  public getTiket(id: number): ITiket {

    const tiketsArray = JSON.parse(localStorage.getItem('todo'));

    this.todoTiket = tiketsArray.find(tiket => tiket.id === id);
    console.log(this.todoTiket);
    return this.todoTiket;
  }

  // редактирование загруженной задачи (описание задачи, теги и статус) и сохранения.
  public setTiket(tiketChanged, titleTiket: string, descriptionTiket: string, statusTiket: string) {

    tiketChanged.title = titleTiket;
    tiketChanged.description = descriptionTiket;
    tiketChanged.status = statusTiket;

    const todoTiketsArray: ITiket[] = JSON.parse(localStorage.getItem('todo'));

    Object.assign(todoTiketsArray[tiketChanged.id - 1], tiketChanged);
    localStorage.setItem('todo', JSON.stringify(todoTiketsArray));

    this.todoitems.updateLocalTiketsArray();
  }

}
