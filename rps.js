const playGame = function(userChoice){
    // 1 for rock, 2 for paper and 3 for scissors
    let computerChoice = Math.floor(Math.random()*3) + 1;

    if(userChoice === 'rock' && computerChoice === 1){
        return 'It is a tie!';
    }
    else if(userChoice === 'rock' && computerChoice === 2){
        return 'User lose.';
    }
    else if(userChoice === 'rock' && computerChoice === 3){
        return 'User win!';
    }
    else if(userChoice === 'paper' && computerChoice === 1){
        return 'User win!';
    }
    else if(userChoice === 'paper' && computerChoice === 2){
        return 'It is a tie!';
    }
    else if(userChoice === 'paper' && computerChoice === 3){
        return 'User lose.';
    }
    else if(userChoice === 'scissors' && computerChoice === 1){
        return 'User lose.';
    }
    else if(userChoice === 'scissors' && computerChoice === 2){
        return 'User win !';
    }
    else if(userChoice === 'scissors' && computerChoice === 3){
        return 'It is a tie!';
    }
    else {
        return 'Please enter a valid input.';
    }
}