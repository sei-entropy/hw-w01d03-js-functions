const rollDice = function(){
    let num1 = Math.floor(Math.random() * 6) + 1
    let num2 = Math.floor(Math.random() * 6) + 1
    let sum = num1 + num2;
  
    return 'Dice rolled are ' + num1 + ' and ' + num2 + '. Sum is ' + sum ;
}
rollDice() 
