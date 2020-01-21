const choices = ['rock', 'paper', 'scissors'];

const playGame = function (userChoice) {
    let computerChoice = generateChoice(0, 2);

    if (computerChoice === userChoice) {
        return "Computer picked: " + computerChoice + ". " + "User picked: " + userChoice + ". it's a tie.";
    }
    else if ((userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock')) {
        return "Computer picked: " + computerChoice + ". " + "User picked: " + userChoice + ". user lost.";
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return "Computer picked: " + computerChoice + ". " + "User picked: " + userChoice + ". user won.";
    }

};

const generateChoice = function (min, max) {
    let index = Math.floor(Math.random() * (max - min + 1)) + min;
    return choices[index];
};