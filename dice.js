const rollDice = function () {
    let diceOne = Math.floor(Math.random()*6)+1;
    let diceTwo = Math.floor(Math.random()*6)+1;
    let sumOfDice = diceOne + diceTwo;
    console.log("Dice rolled are "+diceOne+" and "+diceTwo+". Sum is "+sumOfDice+".");
  }
  