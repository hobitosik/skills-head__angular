import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input()
  public user: IUser;
  public imgs: Array<string>;

  @Output()
  public onUserDelete = new EventEmitter();

  constructor() {}

  // можно обойтись без нее
  private pathValues: Array<string> = [];

  public deleteUser(id: string) {
    this.onUserDelete.emit(this.user);
    console.log('delete', id);
  }

  public ngOnInit() {
    for (const key in this.user.picture) {
      if (this.user.picture.hasOwnProperty(key)) {
        const value: string = this.user.picture[key];
        this.pathValues.push(value);
      }
    }
    this.imgs = this.pathValues;
    console.log(this.imgs);
  }

}
