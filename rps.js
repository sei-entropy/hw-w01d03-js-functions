const playGame = function (userChoice){
console.log("your choice is : " + userChoice);
    let CompuChoose = Math.floor(Math.random() * 3);
    if (CompuChoose === 0) {
        CompuChoose = 'rock';}
    if (CompuChoose === 1) {
        CompuChoose = 'Paper';}
    if (CompuChoose === 2) {
        CompuChoose = 'Scissor';}
        console.log("computer choice :" + CompuChoose );
    // if (rock !== CompuChoose){
    //     console.log("win");}else{
    //     console.log("lose");} 
    if (userChoice === CompuChoose) { console.log("It's a tie!"); }
    if (userChoice ==='rock'){
        if(CompuChoose ==='paper'){
            console.log("you lose !!");
        }else{
            console.log("you win");
        }
    }
    if (userChoice === 'paper') {
        if (CompuChoose === 'Scissor') {
            console.log("you lose !!");
        } else {
            console.log("you win");
        }
    }
    if (userChoice === 'Scissor') {
        if (CompuChoose === 'rock') {
            console.log("you lose !!");
        } else {
            console.log("you win");
        }
    }

}
playGame("rock");

