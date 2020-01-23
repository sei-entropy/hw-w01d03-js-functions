const gameRps = function (userPick)
{
    
    let randomPick = Math.floor(Math.random() * 3);
    if (randomPick === 0)
    {
        randomPick = 'rock';
    } else if (randomPick === 1)
    { 
        randomPick = 'paper';
    }else if (randomPick === 2)
    { 
        randomPick = 'scissors';
    }
    
    if ((userPick === 'rock') && (randomPick === 'scissors'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You win!";

    } else if ((userPick === 'scissors') && (randomPick === 'rock'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You lose!";

    } else if ((userPick === 'rock') && (randomPick === 'paper'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You lose!";

    } else if ((userPick === 'paper') && (randomPick === 'rock'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You win!";

    } else if ((userPick === 'scissors') && (randomPick === 'paper'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You win!";

    }else if ((userPick === 'paper') && (randomPick === 'scissors'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " You lose!";
    }
    else if ((userPick === 'paper') && (randomPick === 'paper'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " it is a tie.";
    }
    else if ((userPick === 'rock') && (randomPick === 'rock'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " it is a tie.";
    }
    else if ((userPick === 'scissors') && (randomPick === 'scissors'))
    {
        return "You pick " + userPick + " and random pick is " + 
        randomPick + " it is a tie.";
    }


}

