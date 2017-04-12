//here we define out array of words

var wordBank = ["free-smoke", ]
// here we choose a random word from above array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// array to store guesses
var s;
var count = 0;
// empty array to score guesses
var answerArray = [];

// fill answer array with underscores so underscores match letters in word
function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }
    // put them in a string
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

// get the letter the user typed in the box
function Letter() {
    var letter = document.getElementById("letter").value;
    
    // make sure we have a guess
    if (letter.length > 0) {
        for (var i = 0; i < randomWord.length; i++) {
            // now if the random word contains a letter the user typed in
            if (randomWord[i] === letter) {
                // assign it to letter
                answerArray[i] = letter;
            }



        }
        // here is how many times it takes
        count++;
        document.getElementById("counter").innerHTML = "No. of clicks = " + count;
        document.getElementById("answer").innerHTML = answerArray.join("");

    }

    if (count > 10) {
        document.getElementById("stat").innerHTML = "You Lost the Game but You May Continue to Play"
    }
}
