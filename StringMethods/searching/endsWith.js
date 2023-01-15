// endsWith() method checks whether a string with some specified string or not
// Returns true if starts with specified string or returns false if not

let string = "This is a string to check whether a string startsWith some specified string";
let substr = "string";

console.log(string.endsWith(substr));           // true
console.log(string.endsWith("some"));           // false


// second parameter gives us lenght of string to search in
console.log(string.endsWith(substr, 5));
console.log(string.endsWith(substr, string.length));