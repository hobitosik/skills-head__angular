'use strict';

interface IUser {
	dob: string;
	email: string;
	picture: {
		medium: string;
	};
	phone: string;
	name: {
		first: string;
		last: string;
	};
}

class Users {

	private httpGet(url: string) {
		
		return fetch(url)
			.then((response) => {
				return response.json()
					.then((
						data: {results: IUser[]}
					) => {
						return data.results[0];
					})
	
			})
			.catch(error => {
				console.log('Fetch Error :-S', error);
			});
		
	}

	public randomUserPromise(): Promise<IUser> {

		let usersObtained: Array<IUser> = [];
		
		return new Promise((resolve) => {

			
			const RenderableList = <GUser>(user: IUser): Array<IUser> => {
				
				const addList = (user: IUser) => {
					usersObtained.push(user);
					return usersObtained;
				}
			
				const renderList = (usersObtained: Array<IUser>) => {	
					let compareRandom = (a: IUser, b: IUser) => {
						return Math.random() - 0.5;
					}
					usersObtained.sort(compareRandom);
					return usersObtained;
				}
			
				const clearList = (usersObtained: Array<IUser>) => {
					usersObtained = [];
					return usersObtained;
				}
			
				return usersObtained;
			}
	
			this.httpGet('https://randomuser.me/api/')
				.then((user: IUser) => {
					// console.log(user);

					// добавить юзера в массив
					// RenderableList.addList(user);
	
					let year: number = + user.dob.slice(0, 4);
	
					if (year < 1975){
						console.log('ta damm');
						let username: string = user.name.first + ' ' + user.name.last;
						let userpic: string = user.picture.medium;
						let usermail: string = user.email;
						let userphone: string = user.phone;
						this.usercard(username, userpic, usermail, userphone);

						// очистить массив юзеров
					} 
					else {
						console.log('wait...');
						this.httpGet('https://randomuser.me/api/');

						// отрендерить массив юзеров
					}
	
				})
				.catch(error => {
					alert(error); // Error: Not Found
				});
	
		})
	
	}

	public usercard(name: string, img: string, email: string, phone: string) {	
		document.getElementById('username').innerHTML = name;
		document.getElementById('usermail').innerHTML = email;
		document.getElementById('userphone').innerHTML = phone;
		document.getElementById('userpic').setAttribute('src', img);
		document.querySelector('.usercard').classList.add("show");
	}
}


let users = new Users();

document.getElementById('RandomUser').onclick = function() {
	users.randomUserPromise();
}
