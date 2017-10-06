import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderModuleModule } from './slider-module/slider-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SliderModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
