// Using substring() method, substring can be found from the string
// It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

let string = "It is string";
console.log(string);
console.log(string.substring());                    // by default substring takes both arguments as 0
console.log(string.substring(0, 4));                
console.log(string.substring(4, string.length));    // prints substring from index 4 till last character
console.log(string.substring(4));
console.log(string.substring(3, 8));