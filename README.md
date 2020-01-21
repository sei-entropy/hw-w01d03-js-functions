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

2. Dice Roller
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`

3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: substring
Description: the order of the arguments doesn't matter, so substring(1, 4) is the same as substring(4, 1).
Example using it:
let Str = 'JavaScript string methods | JS Functions HW'

str.substring(4,0) \\ return Java 
str.substring(0,4)  \\ return Java
```

Method 2
```
Name: slice
Description: order does matter, so slice(4, 1) will just yield an empty string.
Example using it:
let Str = 'JavaScript string methods | JS Functions HW'

str.slice(4,0) \\ return empty string
str.slice(0,4)  \\  return Java
```

Method 3
```
Name: prototype
Description: In this function we can add new properties and methods to existing object types.
Note: Prototype is a global property which is available with almost all JavaScript objects.
Example using it:
function testFunction(name) {
  name  = " Raghad Alabdulwahab " ;  
}
testFunction.prototype.name = " Raghad Mohammed ";
\\ will return Raghad Mohammed
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
