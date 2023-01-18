// replace() method allows you to replace the first occurrence of a substring in a string with a new one.

const string = "This is a yellow color which is written by yellow pen."


// Only replaces the first occurence of the string
let newString = string.replace('yellow', 'red');
console.log(newString);


// but with the replaceAll method, we can replace all the string
let replacedString = string.replaceAll('yellow', 'red');
console.log(replacedString);


// replaceAll method with a callback function

let newStr = "JS will, Js will, js will rock you";
let pattern = /js/gi;

newStr.replaceAll(pattern, function(match, offset, newStr) {
    if(match==='JS') return 'Javascript';
    if(match==='Js') return 'Javascript';
    if(match==='js') return 'javascript';
    return ''
})

console.log(newStr)
