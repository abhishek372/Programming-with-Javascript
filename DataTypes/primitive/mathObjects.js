// JS have Math object which provides a lot of operations to work with numbers

const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI));                // round the PI to nearest integer

console.log(Math.E, Math.round(Math.E));
console.log(Math.random());                 // Random number between 0 and 1

console.log(Math.floor(3.14454));           // Greatest integer less than or equal to the argument
console.log(Math.ceil(3.14533));            // Smallest integer greater than or equal to the argument

console.log(Math.min(7, 4, 3, 1, 0, -3, -2, -5));       // Returns the minimum numbers between the given numbers
console.log(Math.max(7, 4, 3, 1, 0, -3, -2, -5));       // Returns the minimum numbers between the given numbers

console.log("Random number between 1 to 10 is: ", Math.round(Math.random()*10));


// Absolute value
console.log(Math.abs(-5));

// Square root value
console.log(Math.sqrt(100)); 

// Power of the value
console.log(Math.pow(3, 3));

// Natural Logarithm with base E
console.log(Math.log(2))
console.log(Math.log(10))

// Natural logarithm of base 2 or 10
console.log(Math.LN10)
console.log(Math.LN2)
