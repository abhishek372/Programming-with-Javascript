// Function scope is the block of code defined in the function 
// Variables defined inside the function cannot be acccesed outside the function as 
// they are defined inside the function.

// It means function defined in the global scope can access all variables defined in global scope 
// Function defined inside another function can access the parent function variables and all variables 
// parent function cannot access the inner function variables and properties

const num1 = 3;
const num2 = 4;

// function defined in global scope
function multiply(){
    return num1 * num2;
}

// let result = multiply();
// console.log(result);

const person = 'Rohan';

// Nested function 
function getScore() {
    const n1 = 3;
    const n2 = 5;
    function multiply(){
        return `${person} scored ${n1*n2}`
    }
    return multiply();
}


console.log(getScore())
