import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemsService } from './services/todo-items.service';
import { TodoItemService } from './services/todo-item.service';

import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { EditTodoItemComponent } from './components/edit-todo-item/edit-todo-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TodoItemsService, TodoItemService],
  declarations: [TodoItemComponent, EditTodoItemComponent],
  exports: [
    TodoItemComponent,
    EditTodoItemComponent
  ]
})
export class TodoModule { }
