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

  @Output()
  public onUserDelete = new EventEmitter();

  constructor() {}

  public deleteUser(id: string) {
    this.onUserDelete.emit(this.user);
    console.log('delete', id);
  }

  public ngOnInit() {
    // console.log('On inited');
  }

}
