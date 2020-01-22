const rollDice = function (num = 6){
    var num1 = Math.floor(Math.random() * Math.floor(num));
    var num2 = Math.floor(Math.random() * Math.floor(num));
    var sum = num1 + num2;
    return num1 +"+"+ num2+"="+sum;
  }

 
  rollDice(6);