const thelistOfchoice=['rock','scissors','paper'];
function playGame(userChoice) {
var computerChoice =Math.floor(Math.random()*3);
computerChoice=thelistOfchoice[computerChoice]
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } 
    
  else if (userChoice === 'rock' || 'paper' || 'scissors') {
    if (computerChoice === 'rock') {
       return 'You won!';
    } else {
       return 'your lose!';
    } 
   }
  }