// Global variables
// =============================================================================
// Create an array of words
const word = ["braveheart", "deadpool", "inception", "goonies"];

// Choose a word randomly 
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
console.log(chosenWord);
let correctWord = [];
let wrongWord = [];
let underScore = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let wins = 0;
let losses = 0;

// DOM manipulation
let wordUnderScore = document.getElementsByClassName("underscore");
let wordCorrectGuess = document.getElementsByClassName("correctGuess");
let wordWrongGuess = document.getElementsByClassName("wrongGuess");
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

// Main 
// =============================================================================

// Create underscores based on length of word

for (let i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
    let ii = i;
    setTimeout(function () {
        console.log(ii);
    }, 1000);
}


// Get users guess
document.addEventListener("keypress", function (event) {
    let keyword = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(alphabet);
    // If users guess is correct
    if (alphabet.indexOf(keyword) > -1) {

        if (chosenWord.indexOf(keyword) > -1) {
            // Add to correctWord array
            
            correctWord.push(keyword);
            // Replace underscore with correct letter
            // underScore[chosenWord.indexOf(keyword)] = keyword;
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] == keyword) {
                    underScore[i] = keyword;
                }
            }
            wordUnderScore[0].innerHTML = underScore.join(" ");
            wordCorrectGuess[0].innerHTML = correctWord;
            // Check to see if user word matches guess
            if (underScore.join("") == chosenWord) {
                alert("You Win!");
                wins = wins +1;
            }
            
        }
        else {
            wrongWord.push(keyword);
            wordWrongGuess[0].innerHTML = wrongWord;
            losses = losses +1;
        }

    }
    // wordUnderScore = document.getElementsByClassName("underscore").innerHTML;
    // wordCorrectGuess = document.getElementsByClassName("correctGuess").innerHTML;
    // wordWrongGuess = document.getElementsByClassName("wrongGuess").innerHTML;
});


wordUnderScore[0].innerHTML = underScore.join(" ");
