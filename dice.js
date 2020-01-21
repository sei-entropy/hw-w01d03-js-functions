const rolldice = function() {
    let die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return "Dice rolled are " + die1 + " and " + die2 + ". Sum is " + (die1 + die2);
};

