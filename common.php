<?php

//output a header on each web page with passing parameters for the title of the page
function outputHeader($page_title){
echo<<<END
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>$page_title</title>
			<link rel="stylesheet" type="text/css" href="static/styles.css">
			<script type="text/javascript" src="static/script.js"></script>
			<meta charset="UTF-8"/>
		</head>
	<body class="bd">
        <div id="container">
            <div id="logo">MEMORY CARD GAME!</div>
				<!-- Menu box -->
				<div class="menu">
END;
}

//displays a buttons inside the manu box and highlight selected website
function outputBannerNavigation($pageName){
    
    //Array of pages to link to
    $linkNames = array("Play the game", "Sign up/Log in", "Score board", "Contact");
    $linkAddresses = array("index.php", "sign_up.php", "score_board.php", "contact.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a href="'.$linkAddresses[$x].'"><div ';
			if($linkNames[$x] == $pageName) echo 'id="button_selected">'.$linkNames[$x].'</div></a>';
				else echo 'id="button">'.$linkNames[$x].'</div></a>';
	}//close for
    echo '</div>';
}

//footer with closing tags for the whole HTML code 
function outputFooter(){
echo<<<END
			</div>
		</body>
	</html>
END;
}
?>