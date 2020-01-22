// Homework #3

/// Part 2
const rollDice = function() {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;
  const total = num1 + num2;

  console.log("Dice rolled are " + num1 + " and " + num2 + ". Sum is " + total);
};

rollDice();

const rollDice = function() {
  const num1 = Math.floor(Math.random() * 6);

  console.log(num1);
};
