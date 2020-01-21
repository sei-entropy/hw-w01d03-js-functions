const rollDice=function (numberOfRoll){
    let min=1;
    let max=6;
    let numbers=[];
   if(numberOfRoll>1){
    for(i=1;i<=numberOfRoll;i++){
    let number1=Math.random() * (max- min) + min;
    numbers.push(number1);
}let sum=numbers.reduce((a, b) => a + b, 0);
console.log('Dice rolled are '+numbers+'. Sum is '+sum);
    };

};