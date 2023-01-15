// trimStart() methods removes the whitespaces and line character from the start of the string
// The following characters are the whitespace characters in JavaScript:

// space characters            (" ")
// tab characters              (\t)
// carriage return character   (\r)
// new line character          (\n)
// vertical tab characters     (\v)
// form feed characters        (\f)


let string = "   Javascript";
console.log(string);
console.log(string.trimStart());

let result = string.trimStart();

console.log({string});
console.log({result});
