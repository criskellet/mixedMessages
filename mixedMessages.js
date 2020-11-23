// Filename : MixedMessages.js
// Date : 23/11/2020
// Brief : Create a message generator that outputs a new randon message
// every time it runs.  Message must consist of at least 3 different
// pieces of data.
// Project Objectives :
//      - build a message generator program using JavaScript
//      - Use Got version control
//      - Use command line
//      - Develop locally on my computer
// Prerequisites :
//      - JavaScript
//      - Git and GitHub
//      - Command line

const messageStart = [
        'The elephant in the room',
        'A hot potato',
        'A bird in the hand',
        'Running around like a headless chicken'
];

const messageMiddle = [
        ' is better than',
        ' deserves',
        ' running alongside',
        ' hides under'
];

const messageEnd = [
        ' cold turkey',
        ' cock and bull story',
        ' more holes than swiss cheese',
        ' all your ducks in a row'
];

// Return a random phrase from the array passed in
function getPhrase(arr) {
    // generate a random index into the array
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
} // getPhrase()

console.log("Welcome to Mixed Messages");
// Create a message 
const randomMessage = getPhrase(messageStart) + getPhrase(messageMiddle) 
        + getPhrase(messageEnd);

console.log(randomMessage);
console.log("-------------------------");