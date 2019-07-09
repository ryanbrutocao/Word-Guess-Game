// -----------VARIABLES----------------//

//array of words
var wordList=["APPLE", "BANANA", "ORANGE"];
// ["apple", "banana", "carrot", "durian","eggplant","fennel","grapefruit", "huckleberry", "ice", "jalapeno", "kiwi", "lemons", "mangoes"];
//computer randomly chooses a word
var randomWord= "";
//splits the random word into individual letters
var randomWordLetters=[];
var numberOfLetters = 0;
var letterGuess="";

var wrongLetters = [];

var correctLettersAndDashes = [];

// set user guess remaining count to 12
var userGuessesRemaining = 0;
var userWins = 0;
var userLosses = 0;


// -----------FUNCTIONS----------------//
// start game function
function startGameFunction (){
  // needs to start with setting the guess count to 12
  userGuessesRemaining=12

  // needs to pick a random word
  randomWord= wordList[Math.floor(Math.random()*wordList.length)];

  //needs to set that word to a string
  randomWordLetters=randomWord.split("");
  console.log("This is the randomly chosen word:", randomWord);

  // set a variable for the number of letters (to create an array later?)
  numberOfLetters=randomWord.length
  console.log("This is the number of letters: ", numberOfLetters);

  //  set a variable to hold correct letters and dashes which will display on screen
  correctLettersAndDashes = [];
 
  //set a variable to hold incorrect guesses which will display on screen (also decrement guesses)
  wrongLetters=[];
  
  // ----------needs to show that string as dashes
  for (i=0; i<numberOfLetters; i++) {
    correctLettersAndDashes.push("-");
    console.log("should be ", + numberOfLetters + " dashes: ", correctLettersAndDashes  )
  }
console.log("correct letters/dashes: ", correctLettersAndDashes)
document.getElementById("guessesRemainingText").innerHTML = userGuessesRemaining;
// document.getElementById("correctLettersAndDashesText").innerHTML = correctLettersAndDashes;

}
startGameFunction();



function checkLetterFunction (randomWordLetters, lettersAndDashes) {
// if letters in any position in arr1 are the same as letters in arr2 at any position; alert true
// if true, push/replace to dashes string
//if false, needs to log the incorrect letters in an array and show on screen. 
//if false, also needs to decrement 1 guess.
for (let i=0; i<lettersAndDashes.length; i++) {
  if (randomWordLetters.indexOf[i] === lettersAndDashes[i]) {
    alert("HEY DUMMY THIS IS WORKING")
}
 
}



}

// round complete function that runs after each guess
//
function roundComplete (word1, word2) {
  // if remaining guesses hits 0, then alert that I've lost, add 1 to the loss column, and restart the game.
  // if the words are equal then alert that I've won the game and add 1 to the win column


}





// function to start/run the game ----------------------------------------
function playGame(event){
  let userGuessesRemaining=12
  var randomWord= wordList[Math.floor(Math.random()*wordList.length)];
  var randomWordLetters=randomWord.split("");
  console.log("User Guesses remaining: ", userGuessesRemaining)
  console.log("random word: ",randomWord);
  console.log("random letters split: ",randomWordLetters);
  
  document.getElementById("guessesRemainingText").innerHTML = userGuessesRemaining;
  lettersAndDashes = [];
  
  document.onkeydown = function (e) {
    var keyPress;
    if (e) {
      keyPress = e.which;
    }
    lettersAndDashes.push(String.fromCharCode(keyPress));

    document.getElementById("wrongLetterText").innerHTML = lettersAndDashes.join();

    console.log("key pressed: ", String.fromCharCode(keyPress))
  };
  
}
playGame();


function letterChecking (randomWordLetters) { 

  for (let i=0; i<lettersAndDashes.length; i++){
if (randomWordLetters.indexOf([i]) === lettersAndDashes) {
  console.log("HEY DUMMY THIS IS WORKING")
break;
}  
else if (keyPress===lettersAndDashes.indexOf[i],true){
  userGuessesRemaining--;
  return false;
}
}
}
letterChecking();

function checking (word1, word2) {
  randomWordLetters = [""]
  lettersAndDashes = ""
  //see below. currently need to change array from split letters to look more like the object array I accidentally created.
}
// if key pressed = any letter in random word array then push to new array of dashes and letters and log at the  correct position
// if letter in newdashletter array ===  letter in randomwordArray .index(charAt) then push the letters, if not, push a dash.
//somewhere, something is set to false. If function makes it true, then do the action.
//--------------------------------------------------------------------------





// function letterChecker (keyPress) {
  
// for (let i=0; i <randomWordLetters.length; i++)
// if (lettersAndDashes[i] === randomWordLetters[i]) {
//   alert ("yay!");
//   break;
// } else if (lettersAndDashes[i] != randomWordLetters[i]) {
//   alert ("No, not correct");
//   break;
// }
// }
// letterChecker();
// console.log("My letter/dash object array", lettersAndDashes);
// console.log("letter checker :", letterChecker);
// array for letters letterGuessed - check against it each round, if letter is present show letter, if letter not present show dash!
//when letter guessed, push it to the array. 
// check array against word


//          testing this out                    //





// ------- End Testing -----------//






  // document.onkeyup = function(event) {
  //   for (let i=0; i<randomWord.length; i++) {
  //     lettersAndDashes.push("_");  
  //     console.log("looking for dashes", lettersAndDashes)
  //   }
  //   // Captures the key press, converts it to lowercase, and saves it to a variable.
  //   letterGuess = event.key.toUpperCase();
  //   lettersAndDashes=[];
  //   // If the letter is h, run the following functions/methods.
  //   for (let i=0; i <randomWord.length; i++)
  //   if (lettersAndDashes === randomWordLetters[i]) {
  //     alert ("yay!");
  //     break;
  //   } else if (letterGuess != randomWordLetters[i]) {
  //     alert ("No, not correct");
  //   }
      
  //     // lettersAndDashes.push(letterGuess);
      
  //   }
    
  //   playGame();
  //   console.log("playgame one :", playGame())




  //take key and check it against the first letter of the randomWord
  // if letters match, show the letter on the screen;
  // if letter matches check letter in the next position
  // if letter does not match check letter in next position
  //check against letter at all positions of word.
  // if all letters of the random word array match all letters of the worddash array ==== word array then alert a win and reset the function
      //if no matches found, write letter to screen 
      //if no matches found, remvoe 1 from userGuess
  // else show guessed letter on screen && remove 1 from user guesses remaining.
  // when removing guess from count, make sure it updates on the html
  

// - function to pick random word from array



// createDashes(splitWord);//this line calls the function, but causes it to show double on the screen so maay not be necessary at that part.

// -----------EVENT LISTENERS----------------//





// -----------PSEUDOCODE----------------//
//  ---All game logic on a click event.
//on click will run function 
    // listen for key click
    // on first click only, run function: that picks word and sets dashes (I think I can set the rest of the functions within this function so it wont finish/call the function again until I tell it to by userguesses hitting 0 and triggering)
    //{ function will pick a random word from array
        // random word is represented on the screen by dashes
    //

// word vs dashes


// /reset function








