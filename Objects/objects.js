// Objects is a collection of items in key-value pairs
// It can be created using object literal notation

var user = {};          //create an Empty object
console.log(user);

// declaring new properties using dot notation
user.name = 'John';
user.email = 'john12@gmail.com';
user.phone = '349823';
console.log(user, typeof(user));


// We can also directly  create an object
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);


// update the table properties
table.priceUSD = 150;
console.log(table);
