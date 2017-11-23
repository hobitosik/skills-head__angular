import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersDataService } from '../../../services/users-data.service';

import { IUserData } from '../../../interfaces/IUserData.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usersData: IUserData[];

  constructor(
    private router: Router,
    private usersDataService: UsersDataService
  ) { }

  ngOnInit() {
  }

  public onLogin(login: string, pass: string): void {
    this.usersDataService.getUserData()
    .then((usersData) => {
      this.usersData = usersData;
      for (let i = 0; i < usersData.length; i++) {
        if (login === usersData[i].login && pass === usersData[i].password) {
          localStorage.setItem('login', login);
          console.log('login:', login, 'pass:', pass, 'Вход разрешен');
          this.router.navigate(['home']);
          break;
        } else {
          console.log('login:', login, 'pass:', pass, 'Доступ запрещен');
          break;
        }
      }
    });
  }

}
