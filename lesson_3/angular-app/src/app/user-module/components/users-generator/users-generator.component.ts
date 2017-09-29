import { Component, OnInit } from '@angular/core';
import { UserViewComponent } from '../user-view/user-view.component';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css'],
})
export class UsersGeneratorComponent implements OnInit {

  private userview: Promise<Array<IUser> | void>;
  private ngusers: IUser[];

  constructor(private userviews: UserServiceService) {
    this.userview = this.userviews.getUsers()
      .then((users) => {
        this.ngusers = users;
        console.log('ngusers', this.ngusers);
      });
  }

  ngOnInit() {
  }

}
