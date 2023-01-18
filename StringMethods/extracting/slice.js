// slice() method returns the substring from the string from the given index (start and end)
// by default start index = 0
// and, end index = string length

let string = "this is a string";
console.log(string.slice())             // Returns whole string
console.log(string.slice(2, 5));        // from index 2 to 4 (character at 5 not included)
console.log(string.slice(3,));          // From index 3 to last
console.log(string.slice(-5,));         // from end index -5 to last 


// if start < end, normal slicing occurs
// but if, start > end , slicing not occur, returns an empty string

console.log(string.slice(5, 2));


// extracting local part of email
let email = 'abhijit345@gmail.com';
console.log(email.slice(0, email.indexOf('@')));