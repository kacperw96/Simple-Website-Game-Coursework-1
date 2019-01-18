<?php
	include ('common.php');
	//calles method and passes the parameters
	outputHeader("TOP 10 PLAYERS!");
	outputBannerNavigation("Score board");
?>

<!--Webpage content -->                 
<div id="score_box"> 
    <table id="table">
        <tr style="font-size: 40px;">
            <th width="150" >TOP</th>
            <th width = "600" >USERNAME</th>
            <th width = "250" >SCORE</th>
        </tr>
    </table>
</div>
<script type="text/javascript" src="static/score.js"></script>

<?php
	//call outputFooter() method
	outputFooter();
?>
