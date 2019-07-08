// -----------VARIABLES----------------//

//array of words
var wordList=["APPLE", "BANANA", "ORANGE"];
// ["apple", "banana", "carrot", "durian","eggplant","fennel","grapefruit", "huckleberry", "ice", "jalapeno", "kiwi", "lemons", "mangoes"];
//computer randomly chooses a word
var randomWord= "";
//splits the random word into individual letters
var randomWordLetters=[];

var letterGuess="";

var wrongLetters = [];

var lettersAndDashes = [];

// set user guess remaining count to 12
var userGuessesRemaining = 0;
var userWins = 0;
var userLosses = 0;


// -----------FUNCTIONS----------------//
// start game function
// needs to start with setting the score to 12
// needs to pick a random word
//needs to set that word to a string


// check letters function
// needs to swap letter for dash if correct
// needs to log incorrect guesses and decrement guesses on wrong guess


// round complete function that runs after each guess
// if the words are equal then alert that I've won the game and add 1 to the win column
// if remaining guesses hits 0, then alert that I've lost, add 1 to the loss column, and restart the game.
//


// function to start/run the game
function playGame(event){
  userGuessesRemaining=12
  console.log("User Guesses remaining: ", userGuessesRemaining)
  var randomWord= wordList[Math.floor(Math.random()*wordList.length)];
  console.log("random word: ",randomWord);
  var randomWordLetters=randomWord.split("");
  
  console.log("random letters split: ",randomWordLetters);
  lettersAndDashes = [];
  // ----
  document.onkeydown = function (e) {
    var keyPress;
     if (e) {
      keyPress = e.which;
    }
    for (keypress, lettersAndDashes) {
      if (keyPress===lettersAndDashes.indexOf){
        return false;
      }
    }

      lettersAndDashes.push(String.fromCharCode(keyPress));
    document.getElementById("lettersAndDashesText").innerHTML = lettersAndDashes;
    console.log("key pressed: ", String.fromCharCode(keyPress))
  };
  // for (let i=0; i<randomWord.length; i++) {
  //   lettersAndDashes.push("_");  
  // }
  // document.addEventListener('input', function (e) {
  //   e.target.value = e.target.value.toLowerCase();
  // });


}
playGame();

function letterChecker (keyPress) {
  
for (let i=0; i <randomWordLetters.length; i++)
if (lettersAndDashes[i] === randomWordLetters[i]) {
  alert ("yay!");
  break;
} else if (lettersAndDashes[i] != randomWordLetters[i]) {
  alert ("No, not correct");
  break;
}
console.log("My letter/dash array", lettersAndDashes);
}
letterChecker();
console.log("letter checker :", letterChecker);
// array for letters letterGuessed - check against it each round, if letter is present show letter, if letter not present show dash!
//when letter guessed, push it to the array. 
// check array against word
// function letterChecker (event) {
//   function keyStuff(event) {
//     var x = event.charCode || event.keyCode;  // Get the Unicode value
//     var y = String.fromCharCode(x);  // Convert the value into a character
   
// /*  The above 2 lines of code come from:
// http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_charcode4 */

//     alert("You pressed " + y + " and its charCode is " + x);
//     // display which key was pressed, along with its charCode, in an alert
// }

//   letterGuess = String.fromCharCode(event).toLowerCase();
//   randomWordLetters.push("_");
//   for (let i=0; i<randomWord.length; i++) {
//     if (letterGuess === randomWordLetters[i]){
//       lettersAndDashes.push(letter[i]);
//     }
//   }
// }
// letterChecker();











  // document.onkeyup = function(event) {
  //   for (let i=0; i<randomWord.length; i++) {
  //     lettersAndDashes.push("_");  
  //   }
  //   // Captures the key press, converts it to lowercase, and saves it to a variable.
  //   letterGuess = event.key.toLowerCase();
  //   lettersAndDashes=[];
  //   // If the letter is h, run the following functions/methods.
  //   for (let i=0; i <randomWord.length; i++)
  //   if (letterGuess === randomWordLetters[i]) {
  //     alert ("yay!");
  //     break;
  //   } else if (letterGuess != randomWordLetters[i]) {
  //     alert ("No, not correct");
  //   }
      
  //     // lettersAndDashes.push(letterGuess);
      
  //   }

  //   playGame();





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








