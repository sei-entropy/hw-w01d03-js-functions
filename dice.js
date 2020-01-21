//Dice Roller
const DiceRoller = function () {

    let num1=Math.floor(Math.random() * 6) + 1;
    let num2=Math.floor(Math.random() * 6) + 1;
    
    return " The first number is "+num1+" and second number is "+num2+" And the Sum "+(num1+num2);
    
    };
    
    console.log(DiceRoller());




//1 
Name: substring()
Description: will slice out the rest of the string
Example using it: 
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

//2

Name: toUpperCase()
Description: converted to upper case
Example using it: 
var text1 = "Hello World!";      
var text2 = text1.toUpperCase();

//3 
Name: charAt()
Description: returns the character at a specified index (position) in a string
Example using it: 
var str = "HELLO WORLD";
str.charAt(0); 


