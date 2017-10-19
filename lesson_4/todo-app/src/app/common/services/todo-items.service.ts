import { Injectable } from '@angular/core';
// import { get, set } from 'lockr';

export interface ITiket {
  id: number;
  title: string;
  description: string;
  status: string;
  tags: Array<string>;
}

@Injectable()
export class TodoItemsService {

  constructor() { }

  public getTodos(): ITiket[] {

    const todos: ITiket[] = [];

    if (typeof localStorage === 'object') {

      Object.keys(localStorage).forEach(function (key) {
        const item: ITiket = JSON.parse(localStorage.getItem(key));
        todos.push(item);
      });

      // console.log(todos);
    }

    return todos;
  }

}
