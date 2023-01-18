// IndexOf() method returns the index of the first occurrence of a substring in a string, 
// or returns -1 if the string does not contain the substring.


let string = "This is a string which contains a substring";
console.log(string.indexOf("str"));


// Count the number of occurrences of a substring in a string
let sentence = "You don't know anything what you don't know until you know about that."
let substr = "know"

let index = sentence.indexOf(substr);
let count = 0;

while(index !== -1) {
    count++;
    index = sentence.indexOf(substr, index+1);
}
console.log(count);


// JS is case-sensitive language, means "JS" !== "js"
console.log(sentence.indexOf("you")); 

console.log("JS" == "js");
console.log("JS" === "js");

