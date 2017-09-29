import { Component, OnInit, Input } from '@angular/core';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input()
  public users: IUser[];

  constructor() {}

  // private userview: Promise<Array<IUser> | void>;
  // private ngusers: IUser[];

  // constructor(private userviews: UserServiceService) {
  //   this.userview = this.userviews.getUsers()
  //     .then((users) => {
  //       // console.log(users);
  //       this.ngusers = users;
  //       // console.log('users', users);
  //       console.log('ngusers', this.ngusers);
  //     });
  // }

  public ngOnInit() {
    console.log('On inited');
  }

}
