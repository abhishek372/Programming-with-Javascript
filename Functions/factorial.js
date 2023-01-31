// Function to return factorial of a number

function factorial(number) {
    if(number===0 || number===1){
        return 1
    }
    else{
        return number * factorial(number-1)
    }
}

// Calling functions on factorial of numbers from 1 to 5
const a = factorial(1) 
const b = factorial(2) 
const c = factorial(3) 
const d = factorial(4) 
const e = factorial(5)

console.log(a, b, c, d, e);