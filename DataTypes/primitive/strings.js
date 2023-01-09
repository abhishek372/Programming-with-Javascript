// Strings are a set of character or numbers enclosed within the double or single quotes or backtick-quotes.

let personName = "Ashish";
console.log(personName);

let vehicle = 'Yamaha R15';
console.log(vehicle);

console.log(personName, "have", vehicle);
console.log('It is a string inside single quotes');

let firstName = "Rohan";
let middleName = " Ranjan";
let lastName = " Singh";

let fullName = firstName + middleName + lastName;
console.log(fullName);



// Long literals in strings
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape sequences in string
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log("My name is Abhishek Kumar. \n And, I\'m pursuing Bachelors of Technology in computer science engineering.\n\t And, now I have secured 61% in 12th board and 10CGPA in 10 board. \\");


// Template strings
// To create a template strings , we use two back tick quates
// ${name} is a template string

console.log(`${fullName} is one of the brightest child of the class.`);

