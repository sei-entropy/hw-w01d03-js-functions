const playGame = function (userChoice) {
    userChoice = userChoice.toUpperCase();

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if( computerChoice == 1) {
        computerChoice = 'rock';
    } else if(computerChoice ==2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    let message = "Computer chose: " + computerChoice + ". User chose: " + userChoice;
    
    if (userChoice === computerChoice) {
        return message += ". User ties";
    } 
    
    if ( (userChoice === 'rock' && computerChoice === "scissors") || (userChoice === 'scissors' && computerChoice === "paper")
     || (userChoice === 'paper' && computerChoice === "rock")) 
     {

        return message += ". User wins";
    } else {
        return message += ". User lose";
    }
};