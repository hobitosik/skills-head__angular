import { Injectable } from '@angular/core';

export interface IUser {
  cell: string;
  dob: string;
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  phone: string;
  name: {
    first: string;
    last: string;
  };
}

@Injectable()
export class UserServiceService {

  constructor() { }

  private httpGet(): Promise<IUser> {

    return fetch('https://randomuser.me/api/')
      .then((response) => {
        return response.json()
          .then((
            data: { results: IUser[] }
          ) => {
            return data.results[0];
          });

      })
      .catch(error => {
        console.log('Fetch Error :-S', error);
        return null;
      });

  }

  public getUsers(): Promise<Array<IUser>> {

    const obtainedUsers: IUser[] = [];

    return new Promise((resolve) => {

      const filter = (user: IUser) => {
        obtainedUsers.push(user);

        const year: number = + user.dob.slice(0, 4);

        if (year < 1975) {
          console.log('ta damm');
          resolve(obtainedUsers);
        } else {
          console.log('wait...');
          this.httpGet().then(filter);
        }
      };

      this.httpGet()
        .then(filter);
    });

  }

}
