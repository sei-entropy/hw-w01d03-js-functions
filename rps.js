
     const playGame = function(userPick){
        const choice = ['rock','paper', 'scissors'];
        const computerPick = Math.floor(Math.random() * choice.length);
        if( userPick ===  choice[computerPick]){

            return 'User pick '+ userPick +' computer pick '+choice[computerPick]+' result = tie';

        }
        else if( userPick ==='rock' && choice[computerPick] === 'paper' 
               || userPick ==='paper' && choice[computerPick] === 'scissors' 
               || userPick ==='scissors' && choice[computerPick] ==='rock'){

            return 'User pick '+ userPick +' computer pick '+ choice[computerPick] +' result =  you lose';

        }
        else if( userPick ==='paper' && choice[computerPick] === 'rock' 
               || userPick ==='scissors' && choice[computerPick] === 'paper' 
               || userPick ==='rock' && choice[computerPick] ==='scissors'){

            return 'User pick '+ userPick +' computer pick '+choice[computerPick]+' result = you win';

        }
    }
