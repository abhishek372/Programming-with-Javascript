// Class is a blueprint that we can use repeatedly to create objects
// It can be created using 'class' keyword and then class name should always starts with capital letter

// Create Car class
class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log("Turbo on");
    }   
}


// The role of the constructor function is to assign the passed in parameters to the future objects properties. 
// constructor function is used when instantiating new objects, instances of a given class.
// Constructor function is called everytime when a new object or instance of class is created.

// calling the turbo function
obj.turboOn();

obj = new Car('red', 220);