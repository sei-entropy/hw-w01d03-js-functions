[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Functions HW

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Create and checkout a new branch, named `response`.
1. When finished, `git add`, `git commit`, `git push` to your fork and submit a pull request.

## Questions

1. [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) ([watch the game](https://www.youtube.com/watch?v=JtcHmiAcbZc))
    - Create a file in this repo named `rps.js`
    - Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choice, then chooses `rock`, `paper`, or `scissors` randomly for the computer choice, and returns whether the user `win`, `lose`, or `tie`.
    - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    - _**Hint:** Javascript includes a `Math.random` method._





    let userChoice = prompt("Rock, Papre or Scissors ?");


    function getComputerChoice() {
      
      
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
        }
    }
    
    
    
    function determineWinner(userChoice, getComputerChoice) {
    if (userChoice === getComputerChoice) {
      return 'The game is a tie!';
    } // closing if tie clause!!!
      
     if (userChoice === 'rock' || 'paper' || 'scissors') {
      if (getComputerChoice === 'rock' && userChoice == 'scissors') {
         return 'User lose!';
      } 
     if (getComputerChoice === 'paper' && userChoice == 'rock') {
         return 'User lose!'; }
    
    if (getComputerChoice === 'scissors' && userChoice == 'paper') {
         return 'User lose!'; }
    
    else {
         return 'User win!';
      } 
     }
    }
    
    
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    
    const playGame = () => {
        
        const computerChoice = getComputerChoice();
      console.log('User picked: ' + userChoice);
        console.log('Computer picked: ' + computerChoice);
              console.log(determineWinner(userChoice,computerChoice));
    }
    
    playGame();
    
      } else {
        console.log('Error!');
      }








2. Dice Roller
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`





function rollDice(){

   var d1 = Math.floor(Math.random() * 6) + 1;
   var d2 = Math.floor(Math.random() * 6) + 1;
   var diceTotal = d1 + d2;
   console.log(d1)
   console.log(d2)
   console.log( "You rolled "+diceTotal+".");
   if(d1 == d2){
      status.innerHTML += "<br />DOUBLES! You get a free turn!!";
   }
}

rollDice();





3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: lastIndexOf()
Description: The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
Example using it: var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

```

Method 2
```
Name: search()
Description: The search() method searches a string for a specified value and returns the position of the match
Example using it:  var str = The search() method searches a string for a specified value and returns the position of the match
var pos = str.search("locate");
```

Method 3
```
Name: substring()
Description: The difference is that substring() cannot accept negative indexes.
Example using it: var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
