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

	private httpGet(url: string): Promise<IUser> {
		
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
				return null;
			});
		
	}

	public randomUserPromise(): Promise<IUser> {

		let usersObtained: Array<IUser> = [];
		let usersList = new RenderableList<IUser>();
		
		return new Promise((resolve) => {
	
			this.httpGet('https://randomuser.me/api/')
				.then((user: IUser) => {
					// console.log(user);

					// добавить юзера в массив
					usersObtained = usersList.addList(user);
					console.log('Add user: ' , usersObtained);
	
					let year: number = + user.dob.slice(0, 4);
	
					if (year < 1975){
						console.log('ta damm');
						let username: string = user.name.first + ' ' + user.name.last;
						let userpic: string = user.picture.medium;
						let usermail: string = user.email;
						let userphone: string = user.phone;
						this.usercard(username, userpic, usermail, userphone);

						// очистить массив юзеров
						usersObtained = usersList.clearList();						
						console.log('Clear list: ' , usersObtained);
					} 
					else {
						console.log('wait...');
						this.randomUserPromise();

						// отрендерить массив юзеров
						usersObtained = usersList.renderList();
						console.log('Render List: ' , usersObtained);
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

class RenderableList<GUser> {
	
	private usersObtained: Array<GUser> = [];
	
	public addList = (user: GUser) : Array<GUser> => {
		this.usersObtained.push(user);
		return this.usersObtained;
	}

	public renderList = () : Array<GUser> => {	
		let compareRandom = (a: GUser, b: GUser) => {
			return Math.random() - 0.5;
		}
		this.usersObtained.sort(compareRandom);
		return this.usersObtained;
	}

	public clearList = () : Array<GUser> => {
		this.usersObtained = [];
		return this.usersObtained;
	}

}

let users = new Users();

document.getElementById('RandomUser').onclick = function() {
	users.randomUserPromise();
}
