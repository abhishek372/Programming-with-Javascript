// Octal literal was introduced in ES6
// It contains prefix(0o) in the number which is in range (0-7) 

let num = 0o71;
console.log(num, typeof(num));

// let number = 0o59; // error as 9 is out of range

// treated as decimal as digit 8 is out of range
let number = 087;
console.log(number);

let newNumber = 057;
console.log({newNumber});
