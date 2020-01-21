const dice = function() {
    firstDice = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    secondDice = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    total = firstDice + secondDice; 

    return 'Dices rolled are ' + firstDice + ' and ' + secondDice + '. Sum is ' + total;
};

console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());