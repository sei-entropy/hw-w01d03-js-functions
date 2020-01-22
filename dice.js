const rollDice =function (){ 
    let dice1 =  Math.floor((Math.random() * 6) + 1); ; 
    let dice2 =  Math.floor((Math.random() * 6) + 1); ;
    const sum= dice1+dice2;
    console.log('Dice rolled are '+dice1+" , "+dice2+". Sum is "+sum);
};

output:
rollDice ()
Dice rolled are 6 , 1. Sum is 7

rollDice ()
 Dice rolled are 6 , 2. Sum is 8

rollDice ()
Dice rolled are 4 , 5. Sum is 9