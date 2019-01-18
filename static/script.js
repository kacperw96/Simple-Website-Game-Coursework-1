

function check_login_form(){
	var login_username = document.forms["login_form"]["login_username"].value;
	var login_password = document.forms["login_form"]["login_password"].value;

	
		if(login_username == "" || login_password == "" ){
			alert('Please full fill all fields if you want to log in!');
			return false;
		}
		
		var localObj = JSON.parse(localStorage.getItem(login_username));
			var userObj = localObj.Username;
			var passObj = localObj.Password;
			var scoreObj = 0;
		
		if(userObj == login_username && passObj == login_password){
			alert("Logged in!");
			var logged_user = acc_login(userObj, scoreObj);
			localStorage.setItem("Logged", JSON.stringify(logged_user));
			var storedValue = localStorage.getItem("logged_user");
			return true;
		}
		else{
			alert("Log fail!")
			return false;	
		}
}


function check_signUP_form(){
	var username = document.forms["signUP"]["username"].value;	
	var password = document.forms["signUP"]["password"].value;
	var password2 = document.forms["signUP"]["password2"].value;
	var age =  document.forms["signUP"]["age"].value;
	var phone = document.forms["signUP"]["phone"].value;
	var mail = document.forms["signUP"]["email"].value;
		
		
	
		if(username == "" || password == "" || password2 == "" || mail == "" || phone == "" || age == ""){
			alert('Please full fill all fields if you want to Sign up!');
			return false;
		}
		else if(username.length < 2){
			document.getElementById("user_alert2").innerHTML="Your username should contain at least 2 characters!";
			return false;
		}
		else if(password.length < 6){
			document.getElementById("pass_alert2").innerHTML="Your password should contain at least 6 characters!";
			return false;
		}		
		else if(password != password2){
			document.getElementById("pass_alert2").innerHTML="Your passwords need match!";
			document.getElementById("pass_alert3").innerHTML="Your passwords need match!";			
			return false;
		}
		else if(phone.length > 9 && phone.length < 13){
			document.getElementById("phone_alert").innerHTML="Your phone number should contain between 11  and  13 characters!";			
			return false;
		}
		else if(age <= 0){
			document.getElementById("age_alert").innerHTML="Enter true age! You can not sing up!";			
			return false;
		}
		else{
			var username = document.forms["signUP"]["username"].value;
			var password = document.forms["signUP"]["password"].value;
			var mail = document.forms["signUP"]["email"].value;
			var phone = document.forms["signUP"]["phone"].value;			
			var age =  document.forms["signUP"]["age"].value;

				var acc = create_new_acc(username, password, mail, phone, age);
				localStorage.setItem(username, JSON.stringify(acc));
				var storedValue = localStorage.getItem("username");
				
				var logged_user = acc_login(username, 0);
				localStorage.setItem("Logged", JSON.stringify(logged_user));
				var storedValue = localStorage.getItem("logged_user");
				
			return true;
		}
}


function create_new_acc(username, password, email, phone, age){
	return{
		Username: username, Password: password, Email: email, Phone: phone, Age: age, Score: 0 }
}


function acc_login(username,score){
	return{
	Username:username, Score:score }
}



