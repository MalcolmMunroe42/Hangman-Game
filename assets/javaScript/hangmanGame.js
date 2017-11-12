var wordList = [
 "football",
 "basketball",
 "soccer",
 "badminton",
 "cricket"
]

var activeWord = "";
var letterInActiveWord = [];
var numBlanks = 0;
var underscores = [];
var wrongGuesses = [];

var winTally = 0;
var lossTally = 1;
var numGuesses = 10;

function beginGame() {

wrongGuesses = [];
console.log("Wrong guesses in beginGame", wrongGuesses);
numGuesses = 10;
underscores = [];


activeWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInActiveWord = activeWord.split("");
numBlanks = lettersInActiveWord.length;
console.log(activeWord);
console.log(numBlanks)

for(var i = 0; i < numBlanks; i++) {
    underscores.push("_");
}
console.log(underscores);
document.getElementById('word-blank').innerHTML = underscores.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;

}


function checkLetters(letter) {

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++) {
        if(activeWord[i] === letter) {
            letterInWord = true;

        }
    }

    if(letterInWord) {
        for(i = 0; i < numBlanks; i++) {
            if(activeWord[i] === letter) {
            underscores[i] = letter;

        }

        }
    } else {
        numGuesses --;
        wrongGuesses.push(letter)
    }
}


function gameComplete() {

    document.getElementById('word-blank').innerHTML = underscores.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    console.log(lettersInActiveWord);
    console.log(underscores);

    if(lettersInActiveWord.join(" ") === underscores.join(" ")) {
        winTally++;
        alert("You win! The word is: " + activeWord);
        document.getElementById('win-counter').innerHTML = winTally;
        beginGame();
    } else if (numGuesses === 0) {
        document.getElementById('loss-counter').innerHTML  = lossTally ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("You ran out of guesses");        
        beginGame();
    }    
}

beginGame();

document.onkeyup = function(event) {
 
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("The letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    gameComplete();

}