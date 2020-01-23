const playGame = function (rock){

    const CompuChoose = Math.floor(Math.random() * 3);
    let ComputerChoose = '';
    //console.log(m);
    if (CompuChoose === 0) {
        ComputerChoose = 'Rock';
    }
    if (CompuChoose === 1) {
        ComputerChoose = 'Paper';
    }
    if (CompuChoose === 2) {
        ComputerChoose = 'Scissor';
    }
    if (rock !== ComputerChoose){
        console.log("win");
    }else{
        console.log("lose");
    } 
}
playGame("Rock");

