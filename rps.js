// JS Functions HW  , Q1 
// Rock, Paper, Scissors (watch the game)

function random(str) {
	let randomNum = Math.floor(Math.random()*str.length) ;
    return str[ randomNum ];
}


function playGame( userPicked ) {
    let computerPicked = [ 'rock', 'paper', 'scissors' ];
    let userScore = [ 'win', 'lose', 'tie' ];

    let result = "Computer picked: "+ random(computerPicked);
    result += "  User picked: " + userPicked;
    result += "  User Score "+ random(userScore);

     return result
}



