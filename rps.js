/*Method 1
```
Name: lString Length 
Description: returns the length of a string
Example using it:
```
let nameLength = 'huda alismail';
console.log(nameLength.length);
13


Method 2
```
Name: Replacing String
Description: replaces a specified value with another value in a string
Example using it:
```
let xx = 'I love green';
console.log('replace green with blue')
console.log(xx.replace('green','blue'));

Method 3
```
Name:toUpperCase
Description: convert string to uppercase
Example using it:
```
let name = 'huda';
console.log(name.toUpperCase());
*/

//Dice Roller

const rollDice=function (Roll){
    let number=[];
num=0;

   if(Roll>1){

    for(i=1;i<=Roll;i++){

    let num1=Math.floor(Math.random()*6)+1;
    number.push(num1);

    num+=num1

}
number.push(num)
return number ;
    };
};


//rock, paper, or scissors 

const playGame =function (user_choice){ 

    let choices=['rock','paper','scissors'];   
    let computer_choice='';

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computer_choice= 'rock';
        case 1:
            computer_choice= 'paper';
        case 2:
            computer_choice= 'scissors';
        }
    
    if (computer_choice===user_choice){
        console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User tie');
    }else{
            if(computer_choice===choices[0]&&user_choice===choices[1]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');

            }else if(computer_choice===choices[1]&&user_choice===choices[0]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User lose');

            }else if (computer_choice===choices[0]&&user_choice===choices[2]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User lose');

            }else if (computer_choice===choices[2]&&user_choice===choices[0]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');

            }else if (computer_choice===choices[1]&&user_choice===choices[2]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');

            }else if (computer_choice===choices[2]&&user_choice===choices[1]){

                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');
           
    }
}};
