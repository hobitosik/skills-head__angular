import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModuleModule } from './common/common-module.module';

import { TagsService } from './common/services/tags.service';
import { TodoItemsService } from './common/services/todo-items.service';

export const appFactory = (tags: TagsService, todos: TodoItemsService) => {
  return () => {
    tags.getTags();
    todos.getTodos();
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
    { provide: APP_INITIALIZER, useFactory: appFactory, deps: [TagsService, TodoItemsService], multi: true },
    { provide: 'STATUS', useValue: {'1': 'открыто', '2': 'в процессе', '3': 'выполнено'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }