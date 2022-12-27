// Addition operator (+)

const num = 2;
console.log(num + 5);
console.log(num + true);
console.log(num + 'hello')


let b = true
console.log(b + true)
console.log(b + 'World')
console.log(b + 6)


let c = null
console.log("\n",c + null)           // null + null = Integer
console.log(c + undefined)      // null + undefined = Nan (not a number)
console.log(undefined + undefined)  // Nan (not a number)


//Addition of number as string with numbers")
let s = "5";
console.log(s+3);
console.log(3+s);
console.log(4+5+s);
console.log(4+s+5);