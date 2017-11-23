import { Component, OnInit } from '@angular/core';

import { ITiket } from '../../interfaces/ITiket.interface';
import { TodoItemsService } from '../../modules/todo/services/todo-items.service';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.css']
})
export class TaskListContainerComponent implements OnInit {

  public todos: ITiket[];

  constructor(
    private todoItemsService: TodoItemsService
  ) {
    this.todos = [];
  }

  ngOnInit() {
    this.loadTodos();
  }

  public loadTodos(): ITiket[] {

    while (this.todos.length > 0) {
      this.todos.pop();
    }

    // здесь мы берем полученный из сервиса массив задач, пробегаемся по нему, и каждому элементу создаем
    // клон. и этот клон записываем в новую коллекцию todos
    this.todoItemsService.getTodos().forEach(element => {
      const item = Object.assign({}, element);
      this.todos.push(item);
    });

    return this.todos;
  }

}
