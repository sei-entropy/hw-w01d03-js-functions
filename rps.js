
const playGame = function(userChoice){
    computerChoice = comChoice();
 if(userChoice === computerChoice){
    return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". User tie.";
 }else if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". Computer win.";
    }else{
   return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". User win.";
   }
 }else if (userChoice === 'paper'){
   if(computerChoice === 'scissors'){
     return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". Computer win.";
   }else{
  return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". User win.";
   }
}else if (userChoice === 'scissors'){
   if(computerChoice === 'rock'){
     return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". Computer win.";
   }else {
  return "Computer picked:"+ computerChoice+". User picked:"+ userChoice +". User win.";
   }
}
 };
 const comChoice = function(){
   let computerChoice = Math.floor(Math.random()*3);
   if (computerChoice === 0 ){
      return "rock";
   }else if(computerChoice === 1){
         return "paper";}
         else if(computerChoice === 2){
             return "scissors";
          }
 };