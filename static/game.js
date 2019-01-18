    var click_number = 0;
    var match = 0;
    var score = 0;
    var first_card, second_card;
 
    var cards = [];
		cards[0] = "images/1.png";
		cards[1] = "images/2.png";
		cards[2] = "images/3.png";
		cards[3] = "images/4.png";
		cards[4] = "images/5.png";
		cards[5] = "images/6.png";
		cards[6] = "images/7.png";
		cards[7] = "images/8.png";
		cards[8] = "images/9.png";
		cards[9] = "images/10.png";
		cards[10] = "images/1.png";
		cards[11] = "images/2.png";
		cards[12] = "images/3.png";
		cards[13] = "images/4.png";
		cards[14] = "images/5.png";
		cards[15] = "images/6.png";
		cards[16] = "images/7.png";
		cards[17] = "images/8.png";
		cards[18] = "images/9.png";
		cards[19] = "images/10.png";
	
	shuffle(cards);

    function shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    function points(points) {
        score = score + points;
        document.getElementById("score").innerHTML = "Score:" + score;
    }

    function selected_card(card) {
        if (click_number == 0) {
			click_number++;
            first_card = card;
            document.images[card].src = cards[card];
        } else if (click_number == 1) {
            click_number++;
            second_card = card;
            document.images[card].src = cards[card];
            timer = setInterval(control, 350);
            points(1);
        } else {
            alert("You can not click this image");
        }
    }
	
    var logged_u = JSON.parse(localStorage.getItem("Logged"));
    var user = logged_u.Username;
    document.getElementById("welcome").innerHTML = "Welcome, " + user + "!";


    function control() {
        clearInterval(timer);
        click_number = 0;
        if (cards[second_card] == cards[first_card]) {
            match++;
            if (match == 10) {
                alert("You have matched all the images! Your score is: " + score);
				
                var loadObj = JSON.parse(localStorage.getItem(user));
				if(loadObj == null) {location.reload();}
                if (loadObj.Score > score || loadObj.Score == 0) {
                    var x1 = loadObj.Username;
                    var x2 = loadObj.Password;
                    var x3 = loadObj.Email;
                    var x4 = loadObj.Phone;
                    var x5 = loadObj.Age;
                    var x6 = score;

                    var updateAcc = update_acc(x1, x2, x3, x4, x5, x6);
                    localStorage.setItem(user, JSON.stringify(updateAcc));
					location.reload();
                } else {
                    location.reload();
                }
				location.reload();
            }
        } else {
            document.images[first_card].src = "images/back.png";
            document.images[second_card].src = "images/back.png";
            return;
        }
    }//end function control()

    function update_acc(username, password, email, phone, age, score) {
        return{
            Username: username, Password: password, Email: email, Phone: phone, Age: age, Score: score}
    }//end function update_acc