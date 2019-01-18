<?php
	include ('common.php');
	//calles method and passes the parameters
	outputHeader("Memory game!");
	outputBannerNavigation("Play the game");
?>

<!--Webpage content -->
<div id="welcome">Welcome, you are playing as the Guest!</div>				
<div id="score">Score: 0</div>
<div id="game_box">
    <table id=myTable>
        <tr>
            <td onclick="selected_card(0)"><img id="img1" src="images/back.png" /></td>
            <td onclick="selected_card(1)"><img id="img2" src="images/back.png"/></td>
            <td onclick="selected_card(2)"><img id="img3" src="images/back.png"/></td>
            <td onclick="selected_card(3)"><img id="img4" src="images/back.png"/></td>
            <td onclick="selected_card(4)"><img id="img5" src="images/back.png"/></td>
        </tr>
        <tr>
            <td onclick="selected_card(5)"><img id="img6" src="images/back.png" /></td>
            <td onclick="selected_card(6)"><img id="img7" src="images/back.png"/></td>
            <td onclick="selected_card(7)"><img id="img8" src="images/back.png"/></td>
            <td onclick="selected_card(8)"><img id="img9" src="images/back.png"/></td>
            <td onclick="selected_card(9)"><img id="img10" src="images/back.png"/></td>
        </tr>
        <tr>
            <td onclick="selected_card(10)"><img id="img11" src="images/back.png"/></td>
            <td onclick="selected_card(11)"><img id="img12" src="images/back.png"/></td>
            <td onclick="selected_card(12)"><img id="img13" src="images/back.png"/></td>
            <td onclick="selected_card(13)"><img id="img14" src="images/back.png"/></td>
            <td onclick="selected_card(14)"><img id="img15" src="images/back.png"/></td>
        </tr>
        <tr>
            <td onclick="selected_card(15)"><img id="img16" src="images/back.png"/></td>
            <td onclick="selected_card(16)"><img id="img17" src="images/back.png"/></td>
            <td onclick="selected_card(17)"><img id="img18" src="images/back.png"/></td>
            <td onclick="selected_card(18)"><img id="img19" src="images/back.png"/></td>
            <td onclick="selected_card(19)"><img id="img20" src="images/back.png"/></td>
        </tr>			
    </table>
</div>
<script type="text/javascript" src="static/game.js"></script>

<?php
	//call outputFooter() method
	outputFooter();
?>