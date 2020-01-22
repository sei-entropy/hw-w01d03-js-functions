
//Q2--------------------------------



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