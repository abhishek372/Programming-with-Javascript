// Program to write a function that take a word and locate the position of a chosen letter in that given word.  
// Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match){
    for(let i=0; i<word.length; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test", 't')