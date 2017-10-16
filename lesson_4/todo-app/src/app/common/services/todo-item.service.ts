import { Injectable } from '@angular/core';
import { ITiket } from '../services/todo-items.service';

@Injectable()
export class TodoItemService {

  private tiket: string;

  constructor() { }

  public getTiket(id): string {
    this.tiket = localStorage.getItem(JSON.parse(id));
    console.log(this.tiket);
    return this.tiket;
  }

  public setTiket(id, tiket) {
    localStorage.setItem(id, JSON.stringify(tiket));
  }

}
