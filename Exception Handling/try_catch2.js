// We can also throw an error by calling the error constructor

try {
    throw new ReferenceError();
}catch(err) {
    console.log(err)
    console.log('There was an error');
    console.log('It is still running.');
}