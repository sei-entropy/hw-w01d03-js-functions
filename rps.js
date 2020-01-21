const playGame = function(userChoice) {
    if(typeof userChoice !== 'string') return 'choice must be of type string!'; 
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if(computerChoice === 1) computerChoice = 'Rock'; 
    else if(computerChoice === 2) computerChoice = 'Paper'; 
    else computerChoice = 'Scissor';
    if(computerChoice === 'Rock') {
        if(userChoice === 'Scissor') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User lose.'; 
        else if(userChoice === 'Paper') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User win.'; 
        else return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. Tie.'; 
    } else if(computerChoice === 'Paper') {
        if(userChoice === 'Rock') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User lose.'; 
        else if(userChoice === 'Scissor') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User win.'; 
        else return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. Tie.'; 
    } else {
        if(userChoice === 'Paper') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User lose.'; 
        else if(userChoice === 'Rock') return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. User win.'; 
        else return 'Computer Picked: ' + computerChoice + '. User picked: ' + userChoice + '. Tie.'; 
    }
}

console.log(playGame('Paper'));
console.log(playGame('Rock'));
console.log(playGame('Scissor'));
console.log(playGame('Paper'));
console.log(playGame('Rock'));