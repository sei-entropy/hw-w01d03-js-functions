const rollDice= function( num=2){
let temp;
let sum=0;    
let output='Dice rolled are ';
for(let i=1;i<num;i++){
temp=Math.floor((Math.random() * 6)+1);
sum+=temp;
output+=', '+temp;
}
temp=Math.floor((Math.random() * 6)+1);
sum+=temp;
return(output+=' and '+temp+'. Sum is '+sum);
};

