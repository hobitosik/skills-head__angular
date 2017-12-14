import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ITiket } from '../../../interfaces/ITiket.interface';

@Injectable()
export class TodoItemsService {

  private LocalTiketsArray: ITiket[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.LocalTiketsArray = [];
    this.getTodos2();
  }

  public getTodos(): Promise<ITiket[]> {

    if (this.LocalTiketsArray.length === 0) { // ~~ this.LocalTiketsArray.length
      this.updateLocalTiketsArray();
    }

    return Promise.resolve(this.LocalTiketsArray);
  }

  public getTodos2(): Promise<any> {

    this.httpClient.get('/api')
      .toPromise()
        .then(response => {
          console.log(response);
        });

    return null;
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
  }

}
