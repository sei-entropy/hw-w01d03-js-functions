const rollDice = function() {

    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;


    sum = num1 + num2;



    console.log('Dice Rolled are ' + num1 + ',' + num2 + "  sum is " + sum);

}