const rollDice = function(){
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let sum = num1 + num2;
    return 'Dice rolled are ' + num1 + ' and ' + num2 + '. Sum is ' + sum + '.';
};


const rollDiceBonus = function(numOfRolls) {
    let num = [], dice = 'Dice rolled are ', sum = 0;
    for (let i = 1; i <= numOfRolls; i++){
        num[i] = Math.floor(Math.random() * 6) + 1; 
        dice += num[i] 
        if(i !== numOfRolls){
            dice += ', ';
        }
        else {
            dice += '. ';
        }
        sum += num[i];
    }

    return dice + 'Sum is ' + sum + '.';
}