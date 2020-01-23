const rollDice = function(){

  let num1 = Math.floor(Math.random() * 6);
  let num2 = Math.floor(Math.random() * 6);
  let sum =  num1 + num2;
 return "Dice roll are " + num1 + " and " + num2 + 
    " the sum is " + sum ;
}