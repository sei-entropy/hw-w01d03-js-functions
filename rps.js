
//Q1:
//-------------------------------------------------------------------------------------------------------------------------


let userChoice = prompt("Rock, Papre or Scissors ?");


function getComputerChoice() {
  
  
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
	}
}



function determineWinner(userChoice, getComputerChoice) {
if (userChoice === getComputerChoice) {
  return 'The game is a tie!';
} // closing if tie clause!!!
  
 if (userChoice === 'rock' || 'paper' || 'scissors') {
  if (getComputerChoice === 'rock' && userChoice == 'scissors') {
     return 'User lose!';
  } 
 if (getComputerChoice === 'paper' && userChoice == 'rock') {
     return 'User lose!'; }

if (getComputerChoice === 'scissors' && userChoice == 'paper') {
     return 'User lose!'; }

else {
     return 'User win!';
  } 
 }
}


if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {

const playGame = () => {
    
    const computerChoice = getComputerChoice();
  console.log('User picked: ' + userChoice);
    console.log('Computer picked: ' + computerChoice);
  		console.log(determineWinner(userChoice,computerChoice));
}

playGame();

  } else {
    console.log('Error!');
  }







