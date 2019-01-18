<?php
	include ('common.php');
	//calles method and passes the parameters
	outputHeader("Login/Sign up");
	outputBannerNavigation("Sign up/Log in")
?>

<!-- Login box -->
<div id="login-registartion_box"> 
    <form name="login_form" action="index.php" method="post" onsubmit="return check_login_form();">
        <h3 align="center">Login</h3> 

        <p>Username: <input name="login_username" placeholder="Enter username" type="username"></p>
        <h5 id="user_alert1"></h5>

        <p>Password: <input name="login_password" placeholder="Enter password" type="password"></p>
        <h5 id="pass_alert1"></h5>

        <div class="menu"><input class="botton_pos" type="submit" value="Login!"></div>
    </form>
</div>

<br><br>

<!-- Registration box -->
<div id="login-registartion_box">
    <form name="signUP" action="index.php" method="post" onsubmit="return check_signUP_form();">
        <h3 align="center"> Register </h3> 

        <p>Username: <input type="text" placeholder="Enter username" name="username"></p>
        <h5 id="user_alert2"></h5>

        <p>Password: <input type="password" placeholder="Enter password" name="password"></p>
        <h5 id="pass_alert2"></h5>

        <p>Password: <input type="password" placeholder="Re-enter password" name="password2"></p>
        <h5 id="pass_alert3"></h5>

        <p>Phone No: <input type="number" placeholder="Enter phone number" name="phone"></p>
        <h5 id="phone_alert"></h5>

        <p>&emsp;&emsp;Age: <input type="number" placeholder="Enter age" name="age"></p>
        <h5 id="age_alert"></h5>

        <p>&emsp; Email: <input  type="email" placeholder="Enter email" name="email"></p>
        <div class="menu"><input type="submit"  class="botton_pos" value="Sign me up!"></div>

    </form>
</div>

<?php
	//call outputFooter() method
	outputFooter();
?>