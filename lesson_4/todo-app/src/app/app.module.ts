import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModuleModule } from './common/common-module.module';

import { TagsService } from './common/services/tags.service';

export const appFactory = (tags: TagsService) => {
  return () => {
    tags.getTags();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModuleModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appFactory, deps: [TagsService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
