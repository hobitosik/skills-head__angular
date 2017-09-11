jQuery(document).ready(function($){

	function randomUser(){

		var jqxhr = $.getJSON("https://randomuser.me/api/");

		jqxhr.success(function(data) { 
			console.log(data);
			var username = data.results[0].name.first + ' ' + data.results[0].name.last;
			var userpic = data.results[0].picture.medium;
			var usermail = data.results[0].email;
			var userphone = data.results[0].phone;
			var year = data.results[0].dob;
			year = + year.slice(0, 4);

			if (year < 1975){
				console.log('change');
				$('#username').text(username);
				$('#usermail').text(usermail);
				$('#userphone').text(userphone);
				$('#userpic').attr('src', userpic);
				$('.usercard').show();
			} else {
				randomUser();
			}
		});

	}

	$('#RandomUser').bind('click', function(){

		randomUser();

	});

});
