const rollDice = function () {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);

    let sum = num1 + num2;
    return console.log("Dice rolled are "+ num1 +" and "+ num2+". Sum is "+ sum );


};

/*
Name: indexOf()
Description: It is a method take a string your are looking for and return the postion for the text that you sent
Example using it:   
                    let str = "My name is Shahad, I am doing my HW"
                    let pos = str.indexOf("Shahad");
                    this will return 11

Name: slice()
Description: Take 2 parameters of postion of your string and return it as a new string
Example using it:
                     let str = "My name is Shahad, I am doing my HW"
                    let newStr = str.slice(11, 17);
                    this will return Shahad       

Name: replace()
Description: It is a method take 2 strings the first one is the string that you want to replace it with the secound sting
Example using it:
                    let str = "My name is Shahad, I am doing my HW"
                    let newStr = str.replace("Shahad", "Alqahtani");
                    this will return My name is Alqahtani, I am doing my HW 
*/