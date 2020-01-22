
 



     const playGame= function (userChoice){

        let computerPicked = Math.floor (Math.random()* 3 );
        if (computerPicked ===0) {
            computerPicked= 'rock'
        }
        if (computerPicked===1) {
    
            computerPicked= 'paper'
        }
        if(computerPicked===2){
            computerPicked= 'scissors'
        }

if (userChoice===computerPicked) {
return (" It's a tie ")
}else if (userChoice === 'rock' && computerPicked=== 'paper') {
return (" you lose ");
}else if (userChoice=== 'rock' && computerPicked=== 'scissors') {
    return (" you win ");
}
   
    else if (userChoice=== 'paper' && computerPicked=== 'scissors') {
        return (" you lose ");
        }
        else if (userChoice=== 'paper' && computerPicked=== 'rock') {
            return (" you win ");
            }
    
            else if (userChoice=== 'scissors' && computerPicked=== 'paper') {
                return (" you win ");
                }
                else if (userChoice=== 'scissors' && computerPicked=== 'rock') {
                    return (" you lose ");
                    }


     };
        
