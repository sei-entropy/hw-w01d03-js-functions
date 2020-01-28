const rollDice = function () 
{
    let diceOne = Math.floor(Math.random()*6)+1;

    let diceTwo = Math.floor(Math.random()*6)+1;

    let sumOfDice = diceOne + diceTwo;

    console.log("Dice rolled are "+diceOne+" and "+diceTwo+". Sum is "+sumOfDice+".");
  }

  /* Dice rolled are 3 and 1. Sum is 4.
undefined
rollDice(6,1);
VM254:5 Dice rolled are 5 and 3. Sum is 8.
undefined
rollDice(6,1);
VM254:5 Dice rolled are 5 and 3. Sum is 8.
undefined
rollDice(6,1);
VM254:5 Dice rolled are 1 and 1. Sum is 2.
undefined
rollDice(6,1);
 Dice rolled are 6 and 1. Sum is 7. */

 const rollDice = function (numberRolls)
 {
    let roll ="dice rolled are ";
    let sum=0;
    let array = [];

    for(i=0;i<numberRolls;i++)
      {
        array.push(Math.floor(Math.random()*6)+1);

        sum+=array[i];
      }
    let last=array.pop();

    roll+=array.join();
    
    console.log(roll+" and "+last+". Sum is "+sum+".");
  }