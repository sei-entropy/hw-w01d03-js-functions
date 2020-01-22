const rollDice = function(){

  let num1 = Math.floor(Math.random() * 7);
  let num2 = Math.floor(Math.random() * 7);
  let sum =  num1 + num2;
 return "Dice roll are " + num1 + " and " + num2 + 
    " the sum is " + sum ;
}