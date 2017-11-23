import { Injectable } from '@angular/core';

import { IUserData } from '../interfaces/IUserData.interface';

@Injectable()
export class UsersDataService {

  constructor() { }

  public getUserData(): Promise<IUserData[]> {

    let usersData = JSON.parse(window.localStorage.getItem('usersData'));

    return Promise.resolve(usersData);
  }
}

