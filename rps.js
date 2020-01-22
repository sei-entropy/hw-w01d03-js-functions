const getUserChoice =() =>{
    const randomeNum = (Math.floor(Math.random() *3))
    if (randomeNum === 0){
        return 'Rock';
      }
      else if (randomeNum === 1){
        return 'Paper';
      }
      else if (randomeNum === 2){
      return 'scissors';
      }
        }
    console.log(getUserChoice());
    
    const getComputerChoice =() =>{
    const randomeNum = (Math.floor(Math.random() *3))
    if (randomeNum === 0){
        return 'Rock';
      }
      else if (randomeNum === 1){
        return 'Paper';
      }
      else if (randomeNum === 2){
      return 'scissors';
      }
        }
    console.log(getComputerChoice());