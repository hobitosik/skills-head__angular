import { Component, OnInit } from '@angular/core';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public nguserview: Promise<IUser | void>;

  constructor(private userviews: UserServiceService) {
    this.nguserview = this.userviews.getUsers()
      .then((nguserview) => {
        console.log(nguserview);
      });
  }

  public ngOnInit() {
    console.log('On inited');
  }

}
