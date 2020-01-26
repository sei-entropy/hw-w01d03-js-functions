const playGame = function (userChoice) {
    userChoice = userChoice.toUpperCase();

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if( computerChoice == 1) {
        computerChoice = 'Rock';
    } else if(computerChoice ==2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'SScissors';
    }

    let message = "Computer chose: " + computerChoice + ". User chose: " + userChoice;
    
    if (userChoice === computerChoice) {
        return message += ". User ties";
    } if ( (userChoice === 'Rock' && computerChoice === "Scissors") ||
       (userChoice === 'Scissors' && computerChoice === "Paper") ||
       (userChoice === 'Paper' && computerChoice === "Rock")) {
        return message += ". User wins";
    } else {
        return message += ". User Loses";
    }
};