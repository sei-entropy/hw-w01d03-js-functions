// JS Functions HW  , Q1 
// Rock, Paper, Scissors (watch the game)

function random(str) {
	let randomNum = Math.floor(Math.random()*str.length) ;
    return str[ randomNum ];
}

//let userScore = [ 'win', 'lose', 'tie' ];
function playGame( userPicked ) {
    let computerChooses = [ 'rock', 'paper', 'scissors' ];

    let computerPicked = random(computerChooses) ;

    let result = "Computer picked:"+ computerPicked ;
    result += "  User picked:" + userPicked ;
    if (computerPicked == userPicked ) {
        result += " User tie " ;
    }else if (computerPicked == 'rock ' &&  userPicked == 'scissors' ) {
        result += " User lose " ;
    }else if (computerPicked == 'scissors' &&  userPicked == 'paper' ) {
        result += " User lose " ;
    }else if (computerPicked == 'paper' &&  userPicked == 'rock' ) {
        result += " User lose " ;
    }else{ result += " User win " ; }
    

     return result
}