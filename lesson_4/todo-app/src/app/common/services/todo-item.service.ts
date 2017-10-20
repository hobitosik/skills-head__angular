import { Injectable } from '@angular/core';
import { ITiket } from '../services/todo-items.service';

@Injectable()
export class TodoItemService {

  private todoTiket: ITiket;

  constructor() { }

  public getTiket(id: string): ITiket {
    this.todoTiket = JSON.parse(localStorage.getItem(id));
    console.log(this.todoTiket);
    return this.todoTiket;
  }

  // редактирование загруженной задачи (описание задачи, теги и статус) и сохранения.
  public setTiket(id: string, tiketChanged: ITiket) {
    localStorage.setItem(id, JSON.stringify(tiketChanged));
  }

}
