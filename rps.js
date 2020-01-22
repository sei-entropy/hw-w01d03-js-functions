/*
Write a function that takes rock, paper, or scissors as an argument for the user choice, 
then chooses rock, paper, or scissors randomly for the computer choice, and returns whether the user win, lose, or tie.

Example: playGame('rock') 

// Computer picked: paper. User picked: rock. User lose.
Hint: Javascript includes a Math.random method.
*/
const playGame = function (usrPicked = "") {
    usrPicked = usrPicked.toLowerCase();

    const choiceStack = ['paper', 'rock', 'scissors'];
    const usrPickedIndex = choiceStack.indexOf(usrPicked);
    const randomNum = Math.floor(Math.random() * 3);

    const computerPicked = choiceStack[randomNum];
    const results = [['t', 'c', 'u'],['u', 't', 'c'], ['c', 'u', 't']];
    const usrResult = results[randomNum][usrPickedIndex];
    const resultMap = {'t': "Tie", 'u': "User win", 'c': "User lose"};
    const resurtString = 'Computer picked: ' + computerPicked + '. User picked: ' + usrPicked + '. ' + resultMap[usrResult];
    return resurtString;
};

playGame('rock');