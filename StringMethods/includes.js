// includes() method takes a substring argument and it checks if substring argument exists in the string. 
// It returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let string = "This is a string";
console.log(string.includes('is'));
console.log(string.includes('is a '));          // return true
console.log(string.includes(''))                // false
console.log(string.includes('String'));         // false as strings are case sensitive