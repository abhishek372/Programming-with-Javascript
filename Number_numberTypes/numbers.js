// Numbers in JS can be represented as both integeral or floating point numbers 

console.log(10**2)   
console.log(22%5) 
console.log((5*4)+2-1)
console.log(20/(4/2)+5*2)

let num = 10;
let floatingNum = 50.2;
console.log({num}, {floatingNum});

// Integers are represented in 
// Octal (base 8)
// Hexadecimal (base 16)

// But when we use octal and Hexadecimal number in arithmetic operation, Js treat them as decimal numbers


// Octal number that starts with 0 to 7 
let number = 071;
console.log(number);        // 57

let newNumber = 080;
console.log(newNumber);     // 80

// For this , ES6 give an octal literal 

