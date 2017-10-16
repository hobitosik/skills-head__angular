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

  public getTodos(): Promise<ITiket[]> {
    return new Promise((resolve) => {
      fetch('http://localhost:4200/assets/resources/todo.json')
        .then((responce) => {
          return responce.json()
            .then((
              data: {tikets: ITiket[]}
            ) => {
              // console.log(data.tikets);
              // console.log('загружать список задач из localStorage');
              return data.tikets;
            })
            .then((tikets) => {
              this.setLocalStorage(tikets);
              resolve(tikets);
            })
            .catch((error) => {
              console.log('Todo items fetch error: ', error);
            });
        });
    });
  }

  private setLocalStorage(tikets) {
    for ( const tiket of tikets) {
      localStorage.setItem(tiket.id, JSON.stringify(tiket));
    }
  }

  private getLocalStorage() {
    // console.log('get localStorage');
  }

}
