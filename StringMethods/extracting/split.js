// Using split method, strings can be split at specific place.
// this method divides a string into an array of substrings
// Returns a new array after splitting.

let string = "This's a string in Javascript";
console.log(string.split());
console.log(string.split(' '));         // splitted from " " from the given string
console.log(string.split("'"));         // splitted from " ' " character from the given string

let personName = "John";
console.log(personName.split(''));      // split each character from the string

let strings = "String Split method split()"; 
console.log(strings.split(' '));            // splits each word from string

// 
console.log(strings.split(' ', 2));         // splits the word but with length of array to be converted into