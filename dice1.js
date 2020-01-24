const rollDice = function(){
    const MyRandom1 = Math.floor(Math.random() * 7);
    const MyRandom2 = Math.floor(Math.random() * 7);
    console.log("Dice rolled are "+MyRandom1 +" and "+MyRandom2);
    console.log("sum is "+ (MyRandom1+MyRandom2));
}
rollDice();

//bonus

const rollDice1 = function (num) {
    let MyRandom = 0;
    let myran =[];
    console.log("Dice rolled are:");
    for (let i =0 ; i <num ; i ++){
        let random = Math.floor(Math.random() * 7);
        MyRandom = MyRandom + random;
        myran.push(random);
       // console.log("ice rolled "+random);
    }
    //console.log("sum is " + (MyRandom));
    
    console.log("Dice rolled are " +myran + " and sum is :" +MyRandom);
}
rollDice1(5);

