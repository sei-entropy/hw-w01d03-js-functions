var Player1 = prompt ("Player1: rock, paper, scissors?");
var Player2 = prompt ("Player2: rock, paper, scissors?");

if (P1==="rock" && P2==="rock"||P1==="paper"&&P2==="paper"||P1==="scissors"&&P2==="scissors") {
console.log ("Tie!");
} else {
if (P1==="rock"&&P2==="scissors"||P1==="paper"&&P2==="rock"||P1==="scissors"&&P2==="paper") {
console.log ("Player1 Wins!");
} else {
console.log ("Player2 lose!");
}
}
Game(PlayerOne,PlayerTwo);