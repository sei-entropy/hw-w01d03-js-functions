// Homework #3

/// Part 1

// Homework #3

/// Part 2

const playGame = function(myChoice) {
  let computerChoice = ["rock", "paper", "scissors"];
  let finalResult = ["win", "lose", "tie"];
  const randomNum = Math.floor(Math.random() * 3);

  if (myChoice === computerChoice[randomNum]) {
    // console.log(computerChoice[randomNum]);

    console.log(
      "Computer picked:" +
        computerChoice[randomNum] +
        ". User picked: " +
        myChoice +
        ". User " +
        finalResult[2]
    );
  } else if (
    (myChoice === "rock" && computerChoice[randomNum] === "paper") ||
    (myChoice === "paper" && computerChoice[randomNum] === "scissors") ||
    (myChoice === "scissors" && computerChoice[randomNum] === "rock")
  ) {
    // console.log(myChoice + " and computer choice " + computerChoice[randomNum]);
    console.log(randomNum);
    console.log(
      "Computer picked:" +
        computerChoice[randomNum] +
        ". User picked: " +
        myChoice +
        ". User " +
        finalResult[1]
    );
  } else if (
    (myChoice === "paper" && computerChoice[randomNum] === "rock") ||
    (myChoice === "scissors" && computerChoice[randomNum] === "paper") ||
    (myChoice === "rock" && computerChoice[randomNum] === "scissors")
  ) {
    // console.log(myChoice + " and computer choice " + computerChoice[randomNum]);
    console.log(randomNum);
    console.log(
      "Computer picked:" +
        computerChoice[randomNum] +
        ". User picked: " +
        myChoice +
        ". User " +
        finalResult[0]
    );
  } else {
    console.log("try again");
  }
};
