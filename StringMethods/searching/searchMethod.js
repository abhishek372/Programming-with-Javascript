// String search() method takes the regular expression(regexp) return the index of the first match in the string
// If sting not found then, it returns -1.
// We can alsp pass a string to find the index of that string.

let sentence = "this Is a literal string";
console.log(sentence.search("literal"));

let regexp = /[A-Z]/;               // regexp for any uppercase letter
console.log(sentence.search(regexp));

let digits = /[0-9]/;
console.log(sentence.search(digits));   //Return -1 as no digit found in sentence variable

