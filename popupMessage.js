// JS provide global methods to display popup message boxes 

// alert() function displays a message to the user to display some information to users.
// it have one 'OK' button.

function displayInfo() {
    alert("Hello, this is a alert message box");        // Display string message
    alert("This is a number: ", + 100);
    alert(100);                 // Display number
    alert(Date());              // Display current date and time using Date constructor
}


// prompt() function takes on the basis of user's preference

function userInput() {
    let userName = prompt("Enter your name: ", "John");
    let msg = document.querySelector('#msg');

    if(userName == '' || userName == null){
        msg.innerHTML = 'You didn\'t entered anything. Please Enter the name. ';
   }
   else {
        msg.innerHTML =`You entered name: ${userName}`;
   }
}


// confirm() function displays a popup message to the user with two buttons, OK and Cancel. 
// It returns true if a user has clicked on the OK button or returns false if clicked on the Cancel button.

function userSelection() {
    let userSelection = confirm("Do you want to save the data")
    const data = document.querySelector('#data');

    if (userSelection == true){
        data.innerHTML = 'Your data is saved';
    } else {
        data.innerHTML = 'Data is not saved';
    }
}

