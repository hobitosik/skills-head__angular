import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TodoModule } from './modules/todo/todo.module';

import { UsersDataService } from './services/users-data.service';
import { AuthGuardService } from './pages/login-container/services/authGuard.service';
import { ExitNosaveGuardService } from './guards/exit-nosave-guard.service';
import { NgVersionInterceptorService } from './services/ng-version-interceptor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login-container/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { TaskListContainerComponent } from './pages/task-list-container/task-list-container.component';
import { TaskViewContainerComponent } from './pages/task-view-container/task-view-container.component';
import { SliderComponent } from './shared-components/slider/slider.component';

export const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: LayoutComponent,
    children: [
      { path: 'home', component: TaskListContainerComponent },
      { path: 'todo/edit/:itemId', component: TaskViewContainerComponent, canDeactivate: [ExitNosaveGuardService] }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    TaskListContainerComponent,
    TaskViewContainerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsersDataService,
    AuthGuardService,
    ExitNosaveGuardService,
    NgVersionInterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: NgVersionInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
