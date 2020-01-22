const rollDice= function() {
    const randomNumber1 = Math.floor (Math.random()* 6+1 );
    const randomNumber2= Math.floor (Math.random()* 6+1 );
    const sum= randomNumber1+randomNumber2;
    return ('Dice rolled are '+ randomNumber1+' and '+ randomNumber2+ ' . Sum is '+ sum); 
    
    
    
    };