    var local_length = localStorage.length;

    var localStorage_record = [];//stores all records from the localStorage
    var user_and_score = [];//stores only id username and score 
    var id = 0;

    for (var i = 0; i < local_length; ++i)
        user_and_score[i] = "";

    for (var i = 0; i < local_length; ++i)
        localStorage_record[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));


    localStorage_record.sort(function (a, b) {
        return a.Score - b.Score;
    }); // sorts the localStorage_record by the score (lowest to higest)

	
    for (var i = 0; i < local_length; ++i) {
        if (localStorage_record[i].Score > 0) {
            id++;
            user_and_score[i] = [id, localStorage_record[i].Username, localStorage_record[i].Score];
        }
    } // 

    for (var i = 0; i < localStorage_record.length; i++)
    {
        var newRow = table.insertRow(table.length);// create a new row
        for (var j = 0; j < user_and_score[i].length; j++)
        {
            var cell = newRow.insertCell(j); // create a new cell
			cell.innerHTML = user_and_score[i][j]; // add value to the cell
        }
    }
