// Object is a collection of key-value pairs.

// Values can be any thing number, string, even function

let car = {}
car.mileage = 98734;
car.color = 'red';

console.log(car);

car.turnKey = function() {
    console.log('the engine is running');
}
car.lightsOn = function() {
    console.log('the light is on');
}
// console.log(car.turnKey);      // anonymous function
car.turnKey();
car.lightsOn();
