// Javascript uses 'number' type to represent both integer and floating point numbers

let number = 10; 

let price = 14.5;
console.log(typeof price)

price = 200.00                  // it automatically converts floating to integer type 
console.log(typeof price)       // JS always wants to use less memory as integers uses less memory


// Get range of Number data type
console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(typeof -Infinity, typeof Infinity)


