// startsWith() method checks whether a string starts with a substring or not
// Returns true if strings starts with a given string or false if not

let string = "This is a string to check whether a string startsWith some specified string.";
let substr = "This";

console.log(string.startsWith(substr));
console.log(string.startsWith("A"));

console.log(string.startsWith(substr, 3));          // search starts from index 3
