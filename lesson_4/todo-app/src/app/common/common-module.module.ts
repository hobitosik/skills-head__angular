import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent, statusToken } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';
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
  declarations: [SliderComponent, SliderItemComponent, EditTiketComponent],
  exports: [
    SliderComponent,
    EditTiketComponent
  ]
})
export class CommonModuleModule { }
