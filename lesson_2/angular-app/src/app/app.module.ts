import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FeedbackComponentComponent } from './feedback-component/feedback-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FeedbackComponentComponent,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
