const playGame =function (user_choice){ 
    let choices=['rock','paper','scissors'];   
    let computer_choice =Math.floor(Math.random() * choices.length) - 1;
    if (computer_choice===user_choice){
        console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User tie');
    }else{
            if(computer_choice===choices[0]&&user_choice===choices[1]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');
            }else if(computer_choice===choices[1]&&user_choice===choices[0]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User lose');
            }else if (computer_choice===choices[0]&&user_choice===choices[2]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User lose');
            }else if (computer_choice===choices[2]&&user_choice===choices[0]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');
            }else if (computer_choice===choices[1]&&user_choice===choices[2]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');
            }else if (computer_choice===choices[2]&&user_choice===choices[1]){
                console.log('Computer picked: '+ computer_choice+'. User picked: '+user_choice+'. User win');
            }
    }

};
