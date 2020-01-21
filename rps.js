
//// Rock, Paper, Scissors
const play = function (choice) {
    // pick you fighter 
    if (choice === 'rock')
     console.log("Player: "+ choice)
     else if (choice === 'paper')
     console.log("Player: "+ choice)
     else if (choice === 'scissors')
     console.log("Player: "+ choice)
     else  console.log("Wrong choice")

let computer = Math.random(); // chance value bettwen 0 and 1 ;
if  (computer <= 0.3)
computer = "rock";
 else if(computer <= 0.6) 
    computer = "paper";
 else 
    computer = "scissors";
 console.log("Computer: " + computer);

 // result

if(choice === computer) 
    return "Tie!";

else if(choice === 'rock' && computer === 'scissors')
        return "User win!"; 
else if(choice === 'rock' && computer === 'paper')
        return "User Lose!"; 

else if(choice === 'paper' && computer === 'rock')
        return "User win!"; 
else if(choice === 'paper' && computer === 'scissors')
        return "User Lose!"; 

else if(choice === 'scissors' && computer === 'paper')
        return "User win!"; 
else if(choice === 'scissors' && computer === 'rock')
        return "User Lose!"; 
        

};
