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
console.log(c + null)           // null + null = Integer
console.log(c + undefined)      // null + undefined = Nan (not a number)
console.log(undefined + undefined)  // Nan (not a number)
