// Strings are the primitive data type which contains charcters enclodes within single, double or backtick quotes.

let string = "Javascript";   
let string2 = ' Language';

string += string2;              // Concat two strings using '+' operator
console.log(string);

// length of string
console.log(`Length of ${string}: `, string.length);    // template string


// conversion to string
// String(n);
// ” + n
// n.toString()

console.log(String(5));             // string constructor used to convert non-string values to string

let state = false;
let stateString = state.toString()
console.log(typeof stateString);


// Also, if we add any other strings with string, it non-string automatically converts to string
let number = 34;
let sumString = number + '';
console.log(typeof sumString);


// We can also compare two strings
let result = 'a' < 'b';
console.log(result);

let resultCompare = 'zavb' > 'n';
console.log(resultCompare);


// In string comparison, only the first character value is compared with the first character value of second string