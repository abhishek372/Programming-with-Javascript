// lastIndexOf() method gives the index of the substring found at last.
// it takes two arguments from index and last index
// this method searches for the substring backward from the fromIndex.

let string = "This is a substring of a string.";
let substr = "a";

// console.log(string.length)
console.log(string.lastIndexOf(substr));

// If you pass the fromIndex argument to the string, 
// the lastIndexOf() method will start searching backward from the fromIndex

let language = "Javascript";
console.log(language.lastIndexOf(substr));
console.log(language.lastIndexOf(substr, 2));

console.log(language.lastIndexOf("T"));         // Returns -1 as "T" not found in string
