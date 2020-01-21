
const playGame= function(yourMove)
{
    const moves = ["rock","paper","scissors"];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    if(yourMove == randomMove)
    {
        return "Tie";

    } else if((yourMove === "paper" && moves[randomMove]=== "rock") || (yourMove =="rock" && randomMove=="paper") || (yourMove=="scissors" && randomMove=="paper")||(yourMove=="rock" && randomMove=="scissors"))
    {
        return "Computer picked: "+randomMove+" . User picked:"+yourMove +" . User win.";
    }
    else {
        return "Computer picked: "+randomMove+" . User picked:"+yourMove +" . User lose.";
    }
};








