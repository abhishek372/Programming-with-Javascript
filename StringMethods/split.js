// Using split method, strings can be split at specific place.
// Changes to a new array after splitting.

let string = "This's a string in Javascript";
console.log(string.split());
console.log(string.split(' '));     // splitted from " " from the given string
console.log(string.split("'"));     // splitted from " ' " character from the given string

let personName = "John";
console.log(personName.split(''));