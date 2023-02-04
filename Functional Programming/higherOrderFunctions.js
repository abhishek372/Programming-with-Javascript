
// A higher-order function is a function that has either one or both of the following characteristics:
// It accepts other functions as arguments
// It returns functions when invoked

function getNumber(){
    return 30;
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { 
    return 42 
}

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(getNumber, getNumber)
addTwoNums(specificNum, randomNum)        
addTwoNums(randomNum, randomNum)
addTwoNums(specificNum,specificNum)
