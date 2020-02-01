/*function rollDie(){

  var num= Math.floor((Math.random() * 6) + 0); 
for (var i=0 ; i <6 ; i++) {
var total = 0;
total += num;
return total  ; } } */
function rollDie(){

  var num1= Math.floor((Math.random() * 6) + 1); 
  var num2= Math.floor((Math.random() * 6) + 1); 
for (var i=0 ; i <6 ; i++) {
var total = 0;
total += num1+num2;
console.log(' Dice rolled are' +'  ' + num1 + ' , '+ num2 +'. Sum is '+total); ; } 

}
 
  