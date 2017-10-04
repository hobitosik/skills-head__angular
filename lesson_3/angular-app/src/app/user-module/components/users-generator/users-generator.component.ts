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
  public isDisabled = false;

  constructor(private userviews: UserServiceService) {
    // this.loadUsers();
  }

  public loadUsers() {
    this.isDisabled = true;

    this.userview = this.userviews.getUsers()
      .then((users) => {
        this.ngusers = users;
        this.isDisabled = false;
      })
      .catch(error => {
        console.log('Error:', error);
        this.isDisabled = false;
      });
  }

  public removeUser(e) {
    const indexArr: number = this.ngusers.indexOf(e);
    this.ngusers.splice(indexArr, 1);
    console.log('Remove', e);
  }

  ngOnInit() {
    // console.log('Generator component inited');
  }

}
