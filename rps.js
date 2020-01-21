// JS Functions HW  , Q1 
// Rock, Paper, Scissors (watch the game)

function random(str) {
    return str[ Math.floor(Math.random()*str.length) ];
}


function playGame( userPicked ) {
    let computerPicked = [ 'rock', 'paper', 'scissors' ];
    let userScore = [ 'win', 'lose', 'tie' ];

    let result = "Computer picked: "+ random(computerPicked);
    result += "  User picked: " + userPicked;
    result += "  User Score "+ random(userScore);

     return result
}



