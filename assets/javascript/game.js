// Create an array of words
const word = ["Braveheart", "Fight Club", "Inception", "Snatch"];

// Choose a word randomly 
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
let correctWord = [];
let wrongWord = [];
let underScore = [];

// Testing
console.log(chosenWord);

// Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(generateUnderscore());

// Get users guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    
// If users guess is correct
    if (chosenWord.indexOf(keyword) > -1) {
    // Add to correctWord array
        correctWord.push(keyword);
        // Replace underscore with correct letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        console.log(correctWord);
    }
    else {
        (wrongWord.push(keyword);
        console.log(wrongWord);
    }
    });
// 
    if ()
// Check if guess is correct
// If correct then push to correct array
// If wrong then push to wrong array
// 