// for in loop executed over the properties of the object

let car = {
    "model":"BMW",
    "name":"BMW Measure",
    "launchYear": 2015,
}

for (props in car) {
    console.log(props, ":",car[props]);
}
console.log(car);


let array = [2, 4, 5, 7, 9];
Array.prototype.someMethod = true;              // JS library modifies the Array prototype directly, for...in loop will iterate over that also
for(let i in array){
    console.log(i, array[i]);
}