import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SliderComponent, SliderItemComponent],
  exports: [SliderComponent]
})
export class SliderModuleModule { }
