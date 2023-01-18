// replace() method takes as a parameter the old substring and a new substring.

let language = "English, Hindi";
console.log(language);
console.log(language.replace('English', 'French'));
console.log(language);
console.log(language.replace('Hindi', 'English'));
console.log(language);


// String remained same as new object is created everytime when some methods applied on them.

// replace() method also works with regular expression 
// let newStr  = str.replace(regularexpression, newSubStr)c

let str = 'JS will, JS will rock you!';
let newStr = str.replace(/JS/g,'JavaScript');           // g is used for global, so that all strings can be replaced

console.log(newStr);


