'use strict';

jQuery(document).ready(function($){

	function randomUser(){

		var jqxhr = $.getJSON("https://randomuser.me/api/");

		jqxhr.success(function(data) { 
			console.log(data);
			var username = data.results[0].name.first + ' ' + data.results[0].name.last;
			var userpic = data.results[0].picture.medium;
			var usermail = data.results[0].email;
			var userphone = data.results[0].phone;
			var year = + data.results[0].dob.slice(0, 4);

			if (year < 1975){
				console.log('ta damm');
				usercard(username, userpic, usermail, userphone);
			} else {				
				console.log('wait...');
				randomUser();
			}
		});

	}

	function httpGet(url) {

		// fetch
		return fetch(url)
			.then(response => {
				return response.json()
					.then(data => {
						return data.results[0];
		      })

	  	})
			.catch(error => {
				console.log('Fetch Error :-S', error);
				reject(new Error("Network Error"));
			});

	}

	function randomUserPromise(){

		return new Promise((resolve) => {

			httpGet('https://randomuser.me/api/')
				.then(user  => {
					console.log(user);

					let username = user.name.first + ' ' + user.name.last;
					let userpic = user.picture.medium;
					let usermail = user.email;
					let userphone = user.phone;
					let year = + user.dob.slice(0, 4);

					if (year < 1975){
						console.log('ta damm');
						usercard(username, userpic, usermail, userphone);
					} 
					else {
						console.log('wait...');
						randomUserPromise();
					}
				})
				.catch(error => {
			    alert(error); // Error: Not Found
			  });

		})

		  // сделать: промис в запросе передавать аргумент (сид)
	}

	$('#RandomUser').bind('click', function(){

		// randomUser();
		randomUserPromise();

	});


});

function usercard(name, img, email, phone) {	
	$('#username').text(name);
	$('#usermail').text(email);
	$('#userphone').text(phone);
	$('#userpic').attr('src', img);
	$('.usercard').show();
}
