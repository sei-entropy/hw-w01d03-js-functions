const theChoices = ['rock', 'scissors', 'paper'];

function playGame(userChoice) {

  var computerChoice = Math.floor(Math.random() * 3);

  computerChoice = theChoices[computerChoice]
  console.log("computer picked :" + computerChoice + ". " + " " + "User picked : " + userChoice + ". ");

  if (userChoice === computerChoice) {
    console.log("Tie");
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock')) {
    console.log("win");
  } else {
    console.log("Lose");
  }
}