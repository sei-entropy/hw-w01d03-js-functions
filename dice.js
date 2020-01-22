/*
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`

*/

let rollDice = function (no_of_dice) {

    let diceRolled = [];
    while (diceRolled.length < no_of_dice) {
        resultOfDice = Math.floor((Math.random() * 6) + 1);
        if (diceRolled.indexOf(resultOfDice) > -1 == false)
            diceRolled.push(resultOfDice);
    }

    let total = 0
    let i = diceRolled.length
    while (i--) {
        total += diceRolled[i];
    }
    const str = diceRolled.slice(0, diceRolled.lastIndexOf(","));
    const fullString = str.concat(" and ", diceRolled.slice(-1)[0]);
    return console.log('rollDice(' + no_of_dice + ') // Dice rolled are ' + fullString + '.  Sum is ' + total + '.');
}

rollDice(3);