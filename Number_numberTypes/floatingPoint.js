// Floating point numbers are decimal point number with atleast one digit after point

let number = 0.56;
console.log({number});

let newNum = 0.99;
let sum = number + newNum;
console.log(sum);


// Floating point numbers are accurate upto 17 decimal points
let n1 = 0.2 + 0.1;
console.log(n1);            // 0.30000000000000004


let num = 5e4;              // 5*10^4
console.log({num})          // 50000


// We can also use parseFloat() method to convert strings into floating point numbers
let number1 = parseFloat('5.23');
console.log(number1);

console.log(parseFloat('asdf3456'));
console.log(parseFloat('34.56sdfg'));


