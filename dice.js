// Dice Roller
const rollDice =function (){ 
    let num1 = Math.floor(Math.random() * (+6 - +1)) + +1; // random number from 1 to 6
    let num2 = Math.floor(Math.random() * (+6 - +1)) + +1;
    const sum= num1+num2;
    console.log('Dice rolled are '+num1+" , "+num2+". Sum is "+sum);
};
