const choices =["rock", "scissors", "paper"];

const game = function (userChoice){
    var computerChoice = Math.floor(Math.random() * 3)
    computerChoice = choices[computerChoice]

    console.log("computerChoice: " + computerChoice)

    if(userChoice == computerChoice){
        console.log("tie")
    }
    else if((userChoice == "rock" && computerChoice == "scissors")
            || (userChoice == "scissors" && computerChoice == "paper")
            || (userChoice == "paper" && computerChoice == "rock")){
        
        console.log("win")
    }
    else{
        console.log("lose")
    }
}

output :
game ("rock")
7 computerChoice: scissors
 win

game ("rock")
7 computerChoice: rock
 tie
