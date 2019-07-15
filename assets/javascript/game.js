// -----------VARIABLES----------------//

//array of words
var wordList=["apple", "pineapple", "orange", "watermelon", "banana", "carrot", "durian","eggplant","fennel","grapefruit", "huckleberry", "ice", "jalapeno", "kiwi", "lemons", "mangoes"];
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
  // document.getElementById("guessesRemainingText").innerHTML = userGuessesRemaining;

  // needs to pick a random word
  randomWord= wordList[Math.floor(Math.random()*wordList.length)];
  console.log("This is the randomly chosen word:", randomWord);
  //needs to set that word to a string
  randomWordLetters=randomWord.split("");
  console.log("This is the randomly chosen word:", randomWordLetters);

  // set a variable for the number of letters (to create an array later?)
  numberOfLetters=randomWord.length
  console.log("This is the number of letters: ", numberOfLetters);

 
  
  // ----------needs to show that string as dashes
  // userLosses;
  
  console.log("correct letters/dashes: ", correctLettersAndDashes)
  
  //(I'm logging the correct number of dashes for letters, will need to replace letter guessed at index of?)
  
  // Logging the key input//
  reset();
}

function reset () {
  userGuessesRemaining=12
  //  set a variable to hold correct letters and dashes which will display on screen
  correctLettersAndDashes = [];
  //set a variable to hold incorrect guesses which will display on screen (also decrement guesses)
  wrongLetters=[];
  
  for (i=0; i<numberOfLetters; i++) {
    correctLettersAndDashes.push("_".replace(',', ''));
  }
  
  document.getElementById("userLossesText").innerHTML = userLosses; 
  document.getElementById("wrongLetterText").innerHTML = wrongLetters;
  document.getElementById("userGuessesRemainingText").innerHTML = userGuessesRemaining;
  document.getElementById("userWinsText").innerHTML = userWins;
  document.getElementById("correctLettersAndDashesText").innerHTML = correctLettersAndDashes;

}


document.onkeydown = function (key) {
  var keyPress="";
  if (key) {
    keyPress = key.which;
  }
  letterGuess = String.fromCharCode(keyPress).toLowerCase();
  // console.log("this is the key code: ",keyPress)
  
  if (wrongLetters.indexOf(letterGuess) === -1) { 

  
  if (randomWordLetters.indexOf(letterGuess) === -1) {
    userGuessesRemaining--;
    document.getElementById("userGuessesRemainingText").innerHTML = userGuessesRemaining;

    wrongLetters.push(letterGuess);
    document.getElementById("wrongLetterText").innerHTML = wrongLetters;


  }
  
    // if (letterGuess===wrongLetters[i]) {
    //     alert("you've already tried that letter")
    //   }

      //run an if statement that checks if guessed letter is inside of already guessed letter.



  // randomWordLetters;
  // correctLettersAndDashes;
  // letterGuess;
  for (let i=0; i<randomWordLetters.length; i++){
    if (randomWordLetters[i]===letterGuess){
      correctLettersAndDashes[i]=letterGuess;
      document.getElementById("correctLettersAndDashesText").innerHTML = correctLettersAndDashes;

    }
  }
  if (correctLettersAndDashes.join("")===randomWordLetters.join("")) {
    userWins++
    
   setTimeout(alert,10,"You win! Great Job!!!");
    // userGuessesRemaining=12;
    setTimeout(startGameFunction, 10);      
  } else if (userGuessesRemaining===0){
    userLosses++;
   setTimeout(alert,10,"Sorry, you lost!");
    // userGuessesRemaining=12;
    setTimeout(startGameFunction,10);
  } }
}

startGameFunction();





// correctLettersAndDashes.push(letterGuess)
// console.log("useranswer:",letterGuess)
// console.log("index of:", randomWordLetters.indexOf(letterGuess))

  // letterGuess = correctLettersAndDashes.push(String.fromCharCode(keyPress));
//  letterGuess = String.fromCharCode(keyPress);
//  console.log(letterGuess);
//end logging key input (var letterguess = letter)

//  letterGuess=(String.fromCharCode(keyPress))
//  console.log("Random Word Letters Array:", randomWordLetters)
//  console.log("correct letters and dashes: ", correctLettersAndDashes);
  
  // letter checker- key is already logged to an arraay, so we can check the arrays against eachother like this?
  // if (correctLettersAndDashes===randomWordLetters.indexOf([])){
  //  correctLettersAndDashes.push(letterGuess)
  // }else {
  //   alert("Nope, not in the word!")
  // }

//// For the TA's/////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// I spent about 40 hours on this assignment (maybe more). I worked on it for two sessions 
// with my tutor and this is all of the progress I could make. 
// I really wish I had tried the easier option first.
// I think that in theory, I am kind of close, but I cant figure out 
// how to get correct letters to replace dashes. I did not have
// any spare time to get any html/css done. I am very frustrated 
// that I spent so much time on it as it did not allow me time to 
// study anything else. My tutor suggested that I talk to you guys
// about this.  She also recommended I spend more time on the class 
// activities. Hopefully things start clicking because I'm really 
// feeling like I'm not getting it and am wasting tons of time being 
//  so slow and only getting half way done. All that said, I haven't 
//  even began to understand jquery. I've given almost every waking moment
// of my time to this homework and JS over the past 3 weeks. Not sure
// how much more I can give. I feel like I'm studying wrong because this
// should be making sense to me with all of the time I've give it.
// -Ryan
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// method to push to specific index JS = 


//This logs the key stroke, but can only run once per cycle or else it adds up.
// var data = "";
// window.addEventListener("keypress", processKeyPress, false);
// function processKeyPress(event)
// {
//   data += String.fromCharCode(event.charCode);
//   console.log("data data data:", data)
// }
// processKeyPress();
// end of function.


// console.log("randomwordletters.tostring: ", randomWordLetters);
// console.log("letterguess.tostring: ", letterGuess)







// if letters in any position in arr1 are the same as letters in arr2 at any position; alert true
if (randomWordLetters.toString() === correctLettersAndDashes.toString()){
  userWins++;
}
function lettercheckinggg (){
  //change dash to letter;
for (i=0; i<randomWordLetters.length; i++) {
if (processKeyPress() = randomWordLetters[i])
 
return true;
}
if (randomWordLetters.toString() != correctLettersAndDashes.toString()){
  userGuessesRemaining--;
  document.getElementById("userGuessesRemainingText").innerHTML = userGuessesRemaining;
  //if false, needs to log the incorrect letters in an array and show on screen. 
  return false;
}

}
// if true, push/replace to dashes string


//if false, also needs to decrement 1 guess.
// for (let i=0; i<numberOfLetters; i++) {
//   if (String.fromCharCode(event.charCode) ===randomWordLetters.indexOf[i]) {
//     alert("HEY DUMMY THIS IS WORKING")
// }
// }

// checkLetterFunction();
// round complete function that runs after each guess
//
// function roundComplete (word1, word2) {
//   if(userGuessesRemaining===0){
//     userLosses++;
    
//     alert("You lost the game, nice try!");
//     document.getElementById("userLossesText").innerHTML = userLosses;

//     startGameFunction();
//   }else if (randomWordLetters.toString()===correctLettersAndDashes.toString()){
//     alert ("You've won! Congrats!");
//     userWins++;
//     document.getElementById("userWinsText").innerHTML = userWins;

//     startGameFunction(randomWordLetters, correctLettersAndDashes);
//   }
//   }
  // if remaining guesses hits 0, then alert that I've lost, add 1 to the loss column, and restart the game.
  // if the words are equal then alert that I've won the game and add 1 to the win column






// function to start/run the game ----------------------------------------
// function playGame(event){
//   let userGuessesRemaining=12
//   var randomWord= wordList[Math.floor(Math.random()*wordList.length)];
//   var randomWordLetters=randomWord.split("");
//   console.log("User Guesses remaining: ", userGuessesRemaining)
//   console.log("random word: ",randomWord);
//   console.log("random letters split: ",randomWordLetters);
  
//   document.getElementById("userGuessesRemainingText").innerHTML = userGuessesRemaining;
//   correctLettersAndDashes = [];
  
// }
// playGame();









// function letterChecking (randomWordLetters) { 

//   for (let i=0; i<lettersAndDashes.length; i++){
// if (randomWordLetters.indexOf([i]) === lettersAndDashes) {
//   console.log("HEY DUMMY THIS IS WORKING")
// break;
// }  
// else if (keyPress===lettersAndDashes.indexOf[i],true){
//   userGuessesRemaining--;
//   return false;
// }
// }
// }
// letterChecking();

// function checking (word1, word2) {
//   randomWordLetters = [""]
//   lettersAndDashes = ""
//   //see below. currently need to change array from split letters to look more like the object array I accidentally created.
// }
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








