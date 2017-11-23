import { Injectable } from '@angular/core';

import { ITiket } from '../../../interfaces/ITiket.interface';

@Injectable()
export class TodoItemsService {

  private LocalTiketsArray: ITiket[];

  constructor() {
    this.LocalTiketsArray = [];
  }

  public getTodos(): ITiket[] {

    if (this.LocalTiketsArray.length === 0) { // ~~ this.LocalTiketsArray.length
      this.updateLocalTiketsArray();
    }

    return this.LocalTiketsArray;
  }

  public updateLocalTiketsArray(): void {
    // очищаем массив, pop удаляет крайний элемент массива. Он не будет равен Null, и undefinded
    while (this.LocalTiketsArray.length > 0) {
      this.LocalTiketsArray.pop();
    }

    if (typeof localStorage === 'object') {
      JSON.parse(localStorage.getItem('todo')).forEach((item: ITiket) => {
        this.LocalTiketsArray.push(item);
      });
    }

    // console.log('updateLocalTiketsArray', this.LocalTiketsArray.length);
  }

}
