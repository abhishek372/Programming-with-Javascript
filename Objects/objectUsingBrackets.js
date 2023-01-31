// Objects can be build using brackets notation

let house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); 


// Access the properties using either dot notation or brackets notation
var car = {};
car.color = "red";

car["color"] = "green";     // update color property
car["speed"] = 200;

car.speed = 100;            // update the speed property
console.log(car); 


// To have expression
let arrOfKeys = ['speed', 'altitude', 'color'];
let drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (let i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}