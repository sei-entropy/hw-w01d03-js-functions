
// Rock, Paper, Scissors
const game = function (theUserChoice) {

    let number ;
    let TheComputerChoice ;  
    let answer = "";
    number = Math.floor(Math.random() * 3);
    // rock = 0 , paper = 1 , scissors = 2
    if (number===0){
      TheComputerChoice="rock";
    }
    else if (number=1){
      TheComputerChoice="paper";
    }
    else {
      TheComputerChoice="scissors";
    }
    
    if(theUserChoice==="rock"){
      if (TheComputerChoice==="paper"){
         answer="The computer choice "+TheComputerChoice+" you are Win";
    
      }
      else if (TheComputerChoice==="scissors"){
        answer="The computer choice "+TheComputerChoice+" you are lose ";
      }
      else {
          answer="The computer choice "+TheComputerChoice+" Try again";
    
      }
    }
    
    if(theUserChoice==="paper"){
      if (TheComputerChoice==="rock"){
         answer="The computer choice "+TheComputerChoice+" you are Win";
    
      }
      else if (TheComputerChoice==="scissors"){
        answer="The computer choice "+TheComputerChoice+" you are lose ";
      }
      else {
    
        answer="The computer choice "+TheComputerChoice+" Try again";
    
      }
    }
    
    if(theUserChoice==="scissors"){
      if (TheComputerChoice==="paper"){
         answer="The computer choice "+TheComputerChoice+" you are Win";
    
      }
      else if (TheComputerChoice==="rock"){
        answer="The computer choice "+TheComputerChoice+" you are lose ";
      }
      else {
    
        answer="The computer choice "+TheComputerChoice+" Try again";
    
      }
    
    }
    
    return answer;
    
    
    
    };// end funcition 
    
    
    console.log(game("paper"));


    
