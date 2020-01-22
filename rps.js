
// Q1 :

var userSelection = prompt("Which one you going to pick? rock, paper or scissors?");

var computerList = [
    "rock",
    "paper",
    "scissors"
];

var computerSelection = computerList[Math.floor(Math.random() * computerList.length)];

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        var result = "The result is a tie! You have picked: " + choice1 + " and computer picked: " + choice2;
        return result;
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            var result = "rock wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
        else {
            var result = "paper wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            var result = "paper wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
        else {
            var result = "scissors wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            var result = "rock wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
        else {
            var result = "scissors wins! You have picked: " + choice1 + " and computer picked: " + choice2;

            return result;
        }
    }
};


document.body.innerHTML = compare(userSelection, computerSelection);



