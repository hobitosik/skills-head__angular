import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { IUserData } from '../interfaces/IUserData.interface';

@Injectable()
export class UsersDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserData(): Promise<IUserData[]> {

    let usersData = JSON.parse(window.localStorage.getItem('usersData'));

    return Promise.resolve(usersData);
  }

  public getUsers() {

    this.httpClient.get('https://randomuser.me/api/')
      .toPromise()
      .then((v) => {
        console.log(v);
      });
  }
}

