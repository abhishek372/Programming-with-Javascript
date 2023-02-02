// Syntax error occurs when JS compiler connot reads the line

// throw Syntax Error
// let greet = 'Hello;             
// console.log(greet);

// Advantage of using try..catch statement that despite of having error in program 
// the program will runs.

try {
    console.log(a+b)
} catch(err) {
    console.log(err)
    console.log('There was an error');
    console.log('The error was saved in the error log')
}

console.log('My program does not stop')
