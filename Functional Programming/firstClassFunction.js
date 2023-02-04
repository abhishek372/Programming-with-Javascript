// Function are called as first class citizen because 
// In Javascript, function is just another value that we can

// pass to other functions
// save in a variable
// return from other functions


function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { 
    return 42 
};

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
// console.log(result);