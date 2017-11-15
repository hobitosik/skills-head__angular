import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './components/slider/slider.component';
import { TodoComponent, statusToken } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { EditTiketComponent } from './components/edit-tiket/edit-tiket.component';

import { TagsService } from './services/tags.service';
import { TodoItemService } from './services/todo-item.service';
import { TodoItemsService } from './services/todo-items.service';

export const statusObj = {1: 'открыто', 2: 'в процессе', 3: 'выполнено'};

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TagsService,
    TodoItemService,
    TodoItemsService,
    { provide: statusToken, useValue: statusObj }
  ],
  declarations: [SliderComponent, TodoItemComponent, TodoComponent, EditTiketComponent],
  exports: [
    SliderComponent,
    EditTiketComponent,
    TodoComponent
  ]
})
export class CommonModuleModule { }
