// Global variables
// =============================================================================
// Create an array of words
const word = ["braveheart", "fight club", "inception", "snatch"];

// Choose a word randomly 
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
console.log(chosenWord);
let correctWord = [];
let wrongWord = [];
let underScore = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

// DOM manipulation
let wordUnderScore = document.getElementsByClassName("underscore");
let wordCorrectGuess = document.getElementsByClassName("correctGuess");
let wordWrongGuess = document.getElementsByClassName("wrongGuess");

// Main 
// =============================================================================

// Create underscores based on length of word
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
        }
    

// Get users guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(alphabet);
    // If users guess is correct
    if (alphabet.indexOf(keyword) > -1) {
        
        if (chosenWord.indexOf(keyword) > -1) {
            // Add to correctWord array
            console.log("test");
            correctWord.push(keyword);
            // Replace underscore with correct letter
            underScore[chosenWord.indexOf(keyword)] = keyword;
            wordUnderScore[0].innerHTML = underScore.join(" ");
            wordCorrectGuess[0].innerHTML = correctWord;
            // Check to see if user word matches guess
            if (underScore.join("") == chosenWord) {
                alert("You Win!");
            }
        }
        else {
            wrongWord.push(keyword);
            wordWrongGuess[0].innerHTML = wrongWord;
        }
    }
    // wordUnderScore = document.getElementsByClassName("underscore").innerHTML;
    // wordCorrectGuess = document.getElementsByClassName("correctGuess").innerHTML;
    // wordWrongGuess = document.getElementsByClassName("wrongGuess").innerHTML;
});


underScore[0].innerHTML = underScore.join(" ");
