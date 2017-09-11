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
				$('#username').text(username);
				$('#usermail').text(usermail);
				$('#userphone').text(userphone);
				$('#userpic').attr('src', userpic);
				$('.usercard').show();
			} else {				
				console.log('wait...');
				randomUser();
			}
		});

	}

	function httpGet(url) {

		return new Promise(function(resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);

			xhr.onload = function() {
				if (this.status == 200) {
					resolve(this.response);
				} else {
					var error = new Error(this.statusText);
					error.code = this.status;
					reject(error);
				}
			};

			xhr.onerror = function() {
				reject(new Error("Network Error"));
			};

			xhr.send();
		});

	}

	function randomUserPromise(){
		httpGet('https://randomuser.me/api/')
			.then(response => {
				console.log(response);
				let user = JSON.parse(response);

				let username = user.results[0].name.first + ' ' + user.results[0].name.last;
				let userpic = user.results[0].picture.medium;
				let usermail = user.results[0].email;
				let userphone = user.results[0].phone;
				let year = + user.results[0].dob.slice(0, 4);

				if (year < 1975){
					console.log('ta damm');
					$('#username').text(username);
					$('#usermail').text(usermail);
					$('#userphone').text(userphone);
					$('#userpic').attr('src', userpic);
					$('.usercard').show();
				} 
				else {
					console.log('wait...');
					randomUserPromise();
				}
			})
			.catch(error => {
		    alert(error); // Error: Not Found
		  });
	}

	$('#RandomUser').bind('click', function(){

		// randomUser();
		randomUserPromise();

	});


});
