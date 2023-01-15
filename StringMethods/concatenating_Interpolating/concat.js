// concat() method concates the list of strings and 
// if not strings, then it converts them into strings and then concatenate

let greeting = 'Hi';
let message = greeting.concat(' ', 'John');
console.log(message);

console.log()


// Concate array of strings
let colors = ['Blue', ' ', 'Green', ' ', 'Red'];
let result = ''.concat(...colors);
console.log(result);


// Concate non-string arguments
let number = ''.concat(1,2,3);
console.log(number)