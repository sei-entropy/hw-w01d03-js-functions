
var Decisions = function() {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    computerChoice = Math.random();
    if (computerChoice < 0.4) {
    computerChoice = "rock";
    } else if(computerChoice <= 0.8) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);
    }
    
    Decisions();
    
    var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
    count = count + 1
    console.log("The result is a tie!");
    Decisions();
    return compare(userChoice, computerChoice);
    
    } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
    return "rock wins";
    } else {
    return "paper wins";
    }
    } else if (choice1 === "paper") {
    if (choice2 === "rock") {
    return "paper wins";
    } else {
    return "scissors wins";
    }
    } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
    return "scissors win";
    } else {
    return "rock wins";
    }
    }
    }
    
    console.log(compare(userChoice,computerChoice));