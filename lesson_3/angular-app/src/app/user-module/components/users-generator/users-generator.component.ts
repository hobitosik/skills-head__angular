import { Component, OnInit } from '@angular/core';
import { UserViewComponent } from '../user-view/user-view.component';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css'],
})
export class UsersGeneratorComponent implements OnInit {

  public userview: Promise<Array<IUser> | void>;
  public ngusers: IUser[];
  public isDisabled: boolean = false;

  constructor(private userviews: UserServiceService) {
    // this.loadUsers();
  }

  public loadUsers() {
    this.userview = this.userviews.getUsers()
      .then((users) => {
        this.ngusers = users;
        console.log('ngusers', this.ngusers);
    });
  }

  ngOnInit() {
    console.log('Generator component inited');
  }

}
