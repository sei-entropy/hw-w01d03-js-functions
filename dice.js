//Q2
const randomNum = function()
{
let num1= Math.floor(Math.random() * 6)  ;
let num2 = Math.floor(Math.random() * 6)  ;

  return "The result of first number :"+num1+ " and the second number "+num2 +" the result is  "+ (num1+num2)  ;

  };

//Q3
Method 1
```
Name: search() 
Description: method searches a string for a specified value and returns the position of the match .
Example using it: var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

```

Method 2
```
Name: concat() 
Description:  joins two or more strings 
Example using it: var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```

Method 3
```
Name: charAt() 
Description: method returns the character at a specified index (position) in a string 
Example using it: var str = "HELLO WORLD";
str.charAt(0); 