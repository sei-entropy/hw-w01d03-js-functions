
const rollDice = function(){
    const numOne = Math.round(Math.random() * 6) + 1; 
    const numTwo = Math.round(Math.random() * 6) + 1;
    const sum = numOne + numTwo;

    console.log('Dice rolled are ${numOne} and ${numTwo}. Sum is ${sum}')
}

rollDice();