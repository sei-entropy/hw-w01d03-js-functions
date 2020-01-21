




//Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.

const rollDice = function(){
   let num1= Math.floor(Math.random()*6+1);
   let num2=Math.floor(Math.random()*6+1);
   let sum = num1 + num2;
return "Dice rolled are  "+ num1 +" and "+ num2 +" . "+"Sum is "+sum ;
}




//BONUS: have your function take an argument of the # of dice to be rolled.

const rollDice = function(num3){
    let num1= Math.floor(Math.random()*6+1);
    let num2=Math.floor(Math.random()*6+1);
    let sum = num1 + num2 +num3;
 return "Dice rolled are  "+ num1 +", "+ num2 +", and "+ num3 +"Sum is "+sum ;
 }
