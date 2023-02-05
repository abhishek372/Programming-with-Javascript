// this keyword is used to refer to the same object inside the object

const person = {
    shoes : 100,
    stateTax : 1.2,
    totalAmount: function() {
        var calculatedAmount = (this.shoes) * (this.stateTax);
        console.log(calculatedAmount);
    }
}

person.totalAmount();
