// There are two common programming paradigms used in programming paradigms

// Functional programming
// Object Oriented Programming

// Functional Programming - It is the way to implement data and functions work independently and
// the functions use the data to perform some operations and then return some data

let oneNumber = 5;
let otherNumber = 8;

function add(a, b) {
    return a + b;
}

console.log(add(oneNumber, otherNumber));


function objectMaker(number){
    return {
        props: number
    }
}

// Create a new object from function
console.log(objectMaker(50));


// Note: here both the functions and data are working independently and function 'add' working taking
// two parameters to return the sum of the number.

// By default, the function returns undefined.

// Returning custom values from the function makes JS the functional programming.