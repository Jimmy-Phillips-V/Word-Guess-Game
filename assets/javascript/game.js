// Words for Hang Man
var hyphy = ["mac dre", "e-fourty", "too short", "mistah fab", "keak da sneak", "mac mall", "traxamillion", "b legit", "messy marv", "lil b"];

var words = hyphy[Math.floor(Math.random() * hyphy.length)];

var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = words.length;

while (remainingLetters > 0){
    
}