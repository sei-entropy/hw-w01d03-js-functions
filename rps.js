const playGame= function(userChoice)
{
    let computerChoice=Math.floor((Math.random() * 3) + 1);

    if(userChoice==="rock")
    {
        
     if(computerChoice===1 ) 
     {
         return("user tie")
        };
    
     if(computerChoice===2 ) 
     {
         return("user Lose")
        };

     if(computerChoice===3 ) 
     {
         return("User win")
        }
    };
    
    if(userChoice==="paper")
    {
     if(computerChoice===1 ) 
     {
         return("user win")
        };
     if(computerChoice===2 )
      {
          return("user tie")
        };
     if(computerChoice===3 ) 
     {
         return("user lose")
    };
    }
 if(userChoice==="scissors")
 {
     if(computerChoice===1 ) 
     {
         return("user lose")
        };
     if(computerChoice===2 ) 
     {
         return("user win")
        };
     if(computerChoice===3 )
      {
         return("user tie")
        };
    }
}
