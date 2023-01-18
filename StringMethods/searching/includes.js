// includes() method checks whether a string present in another string
// Returns true if present else false if not present

let string =  "This is a string in Javascript";
let substr = "in";

console.log(string.includes(substr));           // Returns true
console.log(string.includes("js"));             // Returns false


// Another parameter position gives to search from that index

let js = "Javascript";
console.log(js.includes("a", 2));           // true
console.log(js.includes("a", 3));           // false