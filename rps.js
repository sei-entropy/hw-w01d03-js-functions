const playGame= function(userChoice){
   //in Pc random choice i will asgin numbers,
   // 1 for rock, 2 for paper, and 3 for scissors
   let pcChoice=Math.floor((Math.random() * 3) + 1); 
   if(userChoice==="rock"){
    if( pcChoice===1 ) {return("User tie")};
    if( pcChoice===2 ) {return("User Lose")};
    if( pcChoice===3 ) {return("User win")};
   }
   if(userChoice==="paper"){
    if( pcChoice===1 ) {return("User win")};
    if( pcChoice===2 ) {return("User tie")};
    if( pcChoice===3 ) {return("User lose")};
   }
if(userChoice==="scissors"){
    if( pcChoice===1 ) {return("User lose")};
    if( pcChoice===2 ) {return("User win")};
    if( pcChoice===3 ) {return("User tie")};
   }
};
