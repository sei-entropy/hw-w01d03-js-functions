

const playGame = function (str) {
    let arr = ['rock', 'paper', 'scissors'];
    let result = '';
    let choice = Math.floor(Math.random() * 3);

    if ((str === 'rock'&& arr[choice]==='rock') || (str === 'paper'&& arr[choice]==='paper') || (str === 'scissors'&& arr[choice]==='scissors'))
        result = 'tie';

     else if ((str === 'rock'&& arr[choice]==='scissors') || (str === 'paper'&& arr[choice]==='rock') || (str === 'scissors'&& arr[choice]==='paper'))
        result = 'win';

     else if ((str === 'scissors'&& arr[choice]==='rock') || (str === 'rock'&& arr[choice]==='paper') || (str === 'paper'&& arr[choice]==='scissors'))
        result = 'lose';
    

return console.log("Computer picked: " + arr[choice] + ". User picked: " + str + ". User " + result + ".");
};
playGame('rock');