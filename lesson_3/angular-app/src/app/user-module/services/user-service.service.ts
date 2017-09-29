import { Injectable } from '@angular/core';

export interface IUser {
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

  private obtainedUsers: IUser[] = [];

  private httpGet(url: string): Promise<IUser> {

    return fetch(url)
      .then((response) => {
        return response.json()
          .then((
            data: {results: IUser[]}
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

    return new Promise((resolve, reject) => {
      this.httpGet('https://randomuser.me/api/')
        .then((user: IUser) => {

          this.obtainedUsers.push(user);

          const year: number = + user.dob.slice(0, 4);

          if (year < 1975) {
            console.log('ta damm');

            resolve(this.obtainedUsers);
          } else {
            console.log('wait...');
            this.getUsers();
          }

          return this.obtainedUsers;
        })
        .catch(error => {
          alert(error); // Error: Not Found
          reject(error);
        });

    });

  }

}
