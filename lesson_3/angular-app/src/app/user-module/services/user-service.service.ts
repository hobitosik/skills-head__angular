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

  public getUsers(): Promise<IUser> {

    return new Promise((resolve) => {

      this.httpGet('https://randomuser.me/api/')
        .then((user: IUser) => {
          // console.log(user);

          const year: number = + user.dob.slice(0, 4);

          if (year < 1975) {
            console.log('ta damm');

            resolve(user);
          } else {
            console.log('wait...');
            this.getUsers();
          }

        })
        .catch(error => {
          alert(error); // Error: Not Found
        });

    });

  }

}
