import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGeneratorComponent } from './components/users-generator/users-generator.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { UserServiceService } from './services/user-service.service';
import { PictureSizesDirective } from './directives/picture-sizes.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UserServiceService],
  declarations: [
    UsersGeneratorComponent,
    UserViewComponent,
    DateFormatPipe,
    PictureSizesDirective
  ],
  exports: [
    UsersGeneratorComponent,
    UserViewComponent
  ]
})
export class UserModuleModule { }
