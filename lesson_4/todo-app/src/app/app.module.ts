import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModuleModule } from './common/common-module.module';

import { TagsService } from './common/services/tags.service';

export const appTagsFactory = (tags) => {
  console.log(tags);
  return () => {
    return new Promise<any>((resolve) => {
      console.log('waiting');
      setTimeout(resolve, 2000);
    });
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
    { provide: APP_INITIALIZER, useFactory: appTagsFactory, deps: [TagsService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
