const rollDice = function(){
    const MyRandom1 = Math.floor(Math.random() * 6);
    const MyRandom2 = Math.floor(Math.random() * 6);
    console.log("Dice rolled are "+MyRandom1 +" and "+MyRandom2);
    console.log("sum is "+ (MyRandom1+MyRandom2));
}
rollDice();

//bonus

const rollDice1 = function (num) {
    const MyRandom1 = Math.floor(Math.random() * 6);
    const MyRandom2 = Math.floor(Math.random() * 6);
    const MyRandom3 = Math.floor(Math.random() * 6);
    console.log("Dice rolled are " + MyRandom1 + ", "+MyRandom2+" and " + MyRandom3);
    console.log("sum is " + (MyRandom1 + MyRandom2 + MyRandom3));
}
rollDice1(3);
///

// Name: length()
// Description: returns the length of a string
// Example using it:txt.length;

//
// Name: search()
// Description: searches a string for a specified value and returns the position of the match
// Example using it: string.search("Word to find")

//

// Name: replace()
// Description: replaces a specified value with another value in a string
// Example using it: str = "Please visit Microsoft!";
//var n = str.replace("Microsoft", "W3Schools");