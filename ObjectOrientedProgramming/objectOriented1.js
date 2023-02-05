// Object oriented programming paradigm is used to group the data and it methods.
// It is an idea of organizing our programs using objects to group related data and functionality


// With the OOP approach, you create an object and store all data related to that 
// object including variables, functions and output statements.

const person = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation =  person.shoes * person.stateTax;
        console.log(calculation);
    }
}

// Accessing the totalPrice method of person object
person.totalPrice();


const person2 = {
    shoes: 120,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = person2.shoes * person2.stateTax;
        console.log(calculation);
    }
}

// Accessing the totalPrice method of person2 object
person2.totalPrice();

