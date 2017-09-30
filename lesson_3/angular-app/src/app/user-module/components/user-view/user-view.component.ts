import { Component, OnInit, Input } from '@angular/core';
import { IUser, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input()
  public user: IUser;

  constructor() {}

  public ngOnInit() {
    console.log('On inited');
  }

}
