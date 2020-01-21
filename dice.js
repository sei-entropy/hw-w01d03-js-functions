// JS Functions HW  , Q2
// function rollDice()


function rollDice( pramter=0 ) {
    
    let result ;
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let sum = num1 + num2 ;
    if (pramter != 0 ) {
        result = 'Dice rolled are '+num1+' , '+num2+' and '+pramter+'. Sum is'+ sum ;
    }else{
        result = 'Dice rolled are '+num1+' and '+num2+'. Sum is'+ sum  ;
    }
    return result
}