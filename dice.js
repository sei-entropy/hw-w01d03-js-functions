function rollDie() {

  const num1 = Math.floor((Math.random() * 6) + 1);
  const num2 = Math.floor((Math.random() * 6) + 1);

  const total = num1 + num2;
  return ('Dice rolled are' + '  ' + num1 + ' , ' + num2 + '. Sum is ' + total);
}