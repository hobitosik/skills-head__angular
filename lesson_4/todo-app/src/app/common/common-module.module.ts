import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';
import { TagsService } from './services/tags.service';
import { TodoItemService } from './services/todo-item.service';
import { TodoItemsService } from './services/todo-items.service';
import { EditTiketComponent } from './components/edit-tiket/edit-tiket.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TagsService,
    TodoItemService,
    TodoItemsService
  ],
  declarations: [SliderComponent, SliderItemComponent, EditTiketComponent],
  exports: [
    SliderComponent
  ]
})
export class CommonModuleModule { }
