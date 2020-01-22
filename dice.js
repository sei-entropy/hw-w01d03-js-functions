const rollDice= function(num=2)
{
    let sum=0;
    let number; 
    for(let i=1;i<num;i++)
    {
    number=Math.floor((Math.random() * 6)+1);
    sum= sum+number;
    }
    number=Math.floor((Math.random() * 6)+1);
    sum+=number;
    return console.log ('Dice rolled are '+number+' and '+number+'. Sum is '+sum)
}; 