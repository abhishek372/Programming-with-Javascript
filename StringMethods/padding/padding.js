// Padding is the process of adding the string into another string
// It can be from start as well as can be from end.


// padStart() pads the string from the start 
// padEnd() pads the string from the end

let greet = "Hello JS";

// if the maxlength of padStart is less than the string length then the string remains same
console.log(greet.padStart(4));
console.log(greet.padStart(10, 0));     // padded the string with 0 as the length given is greater than string length
console.log(greet.padStart(15, ));      // by default space are paddded with the string

// padEnd() 
let result = greet.padEnd(10);
console.log({result}, typeof({result}));

let newResult = greet.padEnd(15,0);
console.log({newResult});

let script = "Java".padEnd(10, "script");
console.log({script});

