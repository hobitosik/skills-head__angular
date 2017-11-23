import { Injectable } from '@angular/core';

import { ITiket } from '../../../interfaces/ITiket.interface';
import { TodoItemsService } from '../services/todo-items.service';

@Injectable()
export class TodoItemService {

  private todoTiket: ITiket;
  private qItems: number;

  constructor(
    private todoItemsService: TodoItemsService
  ) {
    this.todoItemsService.getTodos()
      .then((todos) => {
        this.qItems = todos.length;
      });
  }

  // загрузка задачи из LocalStorage по id
  public getTiket(id: number): Promise<ITiket> {

    const tiketsArray = JSON.parse(localStorage.getItem('todo'));
    // console.log(tiketsArray);

    for (let i = 0; i < tiketsArray.length ; i++) {
      if (tiketsArray[i].id === id) {
        this.todoTiket = tiketsArray[i];
        // console.log(this.todoTiket);
        return Promise.resolve(this.todoTiket);
      }
    }

  }

  public newTiket(titleTiket?: string, descriptionTiket?: string, statusTiket?: string) {
    let idTiket: number = this.qItems + 1;
    let title: string = titleTiket ? titleTiket : '';
    let description: string = descriptionTiket ? descriptionTiket : '';
    let status: string = statusTiket ? statusTiket : 'open';
    let tags: string[] = [];

    this.todoTiket = {
      id: idTiket,
      title: title,
      description: description,
      status: status,
      tags: tags,
    };

    console.log('Новый тикет', this.todoTiket);

    this.setTiket(this.todoTiket, title, description, status);

  }

  // редактирование загруженной задачи (описание задачи, теги и статус) и сохранения.
  public setTiket(tiketChanged, titleTiket: string, descriptionTiket: string, statusTiket: string) {

    tiketChanged.title = titleTiket;
    tiketChanged.description = descriptionTiket;
    tiketChanged.status = statusTiket;

    const todoTiketsArray: ITiket[] = JSON.parse(localStorage.getItem('todo'));

    if (this.qItems === tiketChanged.id - 1) {
      todoTiketsArray.push(tiketChanged);
    } else {
      Object.assign(todoTiketsArray[tiketChanged.id - 1], tiketChanged);
    }

    localStorage.setItem('todo', JSON.stringify(todoTiketsArray));

    this.todoItemsService.updateLocalTiketsArray();
  }

}
