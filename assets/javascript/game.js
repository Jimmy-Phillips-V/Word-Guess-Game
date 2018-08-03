// Words for Hang Man
var hyphy = ["mac-dre", "e-forty", "too-short", "mistah-fab", "keak-da-sneak", "mac-mall", "traxamillion", "b-legit", "messy-marv", "lil-b"];

var words = Math.floor(Math.random() * hyphy.length);

var theWord = hyphy[words];
var splitWord = theWord.split ("-")
// console.log(splitWord)

var guessesLeft = 12;
document.querySelector (".guesses-left").innerHTML = guessesLeft;


var chosenWord = theWord.split("")
console.log(chosenWord)

// console.log(theWord); ---

var underScoreWord = [];

// var answerArray = []; {
for (var i = 0; i < theWord.length; i++) {
    if (chosenWord[i] == "-") {
        underScoreWord.push ("-")
    }
    else {
        underScoreWord.push ("_")
    }
}

var underScoreWordString = underScoreWord.join (" ") 
        document.querySelector (".underscore").innerHTML = underScoreWordString
// console.log (underScoreWord);


var lettersAlreadyChosen = []

document.onkeyup = function(event) {
    // console.log(event.key)
    // var keyword = String.fromCharCode(event);
    for (var i = 0; i < chosenWord.length; i++){
        if (chosenWord[i] === event.key) {
            underScoreWord[i] = event.key
        }
        else { 
            console.log ("happened")
            var wrongLetter = event.key
        };
    }

    // for (var i = 0; i < chosenWord.length; i++){
    //     if (chosenWord[i] != event.key) {
    //         var wrongLetter = event.key
    //     }
    // };

    lettersAlreadyChosen.push (wrongLetter)

    // console.log (lettersAlreadyChosen);
    document.querySelector (".letters-already-chosen").innerHTML = lettersAlreadyChosen;
    
    var total = guessesLeft - lettersAlreadyChosen.length;

    document.querySelector (".guesses-left").innerHTML = total;

    // console.log (underScoreWord)
    
    underScoreWordString = underScoreWord.join (" ") .toUpperCase ()
    document.querySelector (".underscore").innerHTML = underScoreWordString;

};
