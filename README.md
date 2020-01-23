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


function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'It is a tie!';
} // closing if tie clause!!!
  
else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
     return 'Computer Won!';
  } else {
     return 'Wow, You have won!';
 } 
}

else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won!';
  } else {

    return 'Wow, You have won!';

  }
} 
else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won!';
  } else {


    return 'Wow, You have won!';
    
  }
 }
};

const startPlaying = () => {
    let userChoice = getUserChoice('scissors');
    const computerChoice = ComputerChoice();
  		console.log(determineWinner(userChoice,computerChoice));
}
startPlaying();

////////////////////////////

2. Dice Roller
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
function rollDie(sides);
  
    if { sides = 6;
    with(Math) return 1 + floor(random() * sides);

  }
else{

  function rollDice(number, sides)}
    const total = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;
  }
  //////////////
3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name:String Length
Description:help us to find The length of any string
Example using it:
var myName = "Tahani";
var sln = myName.length;
```

Method 2
```
Name:The slice() Method
Description: this method helps any take out any part of the string var and return the taken part and put it in a new string.
Example using it:

<script>
var stringNames = "Maha, Bilal, Tahani";
var res = stringNames.slice(7,13);
document.getElementById("demo").innerHTML = res; 
</script>


```

Method 3
```
Name:Replacing String Content
Description: this method helps to put a value that is defined to put it with another diffrent choosen value in the string
Example using it:
str = "Please visit our House!";
var n = str.replace("House", "School");
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
