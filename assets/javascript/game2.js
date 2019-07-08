// list of words for the computer to randomly choose from
var wordList=["apple", "banana", "carrot", "durian","eggplant","fennel","grapefruit", "huckleberry", "ice", "jalapeno", "kiwi", "lemons", "mangoes"]
console.log("word array", wordList);
var randomWord= wordList[Math.floor(Math.random()*wordList.length)];
console.log("randomly chosen word:", randomWord);

// not sure if I'll need this
// var wordLength=randomWord.length;
// console.log("var wordLength= :", wordLength);
// document.getElementById("currentWordText").innerHTML=wordLength;  This shows to the screen the number of characters in the random word.

// -------- this breaks the word into individual letters- not sure if useful
// var sentence = randomWord;
// for (let i=0; i<randomWord.length; i++){
// console.log(sentence.charAt(i));
// }
// -------------

//splits the word into a string
// var splitWord=randomWord.split();
// console.log("var splitWord: = ", splitWord);
//splits the word into a multiple character strings
var splitWord=randomWord.split("");
// console.log("var quoted splitWord: = ", splitWord);

// -----------
var dashes=[]
function createDashes(randomWord) { //only want this to run when a new round is run.
    // dashes = []
    for (let i=0; i<randomWord.length; i++) {
      dashes.push("_");  
    }
    console.log(dashes);
    console.log(randomWord);
  }
  // createDashes(splitWord);//this line calls the function, but causes it to show double on the screen so maay not be necessary at that part.
  console.log(createDashes(splitWord));
  document.getElementById("dashText").innerHTML=dashes.join(" "); // this is not what we want
  // --------------- need to 
  
                            //not sure why this stopped working...//
                            //   var wordDashFunct=function dashes(randomWord) {
                            //     var dashes = []
                            //     for (let i=0; i<randomWord.length; i++) {
                            //       dashes.push("_");  
                            //     }
                            // }
                            //  wordDashFunct(splitWord);
                            //  console.log("word dash func: ", wordDashFunct());

// -------------------- Good working code above------------------//
let guessesRemaining=12
// document.getElementById("guessesRemainingText").innerHTML=guessesRemaining; 

//-----------------Not working Code---------------//


document.onkeyup=function (event){
  guessesRemaining="";
  var letter = event.key.toLowerCase();
  // console.log("this is the letter clicked: ",letter);
  for (let i=0; i<randomWord.length; i++)
  
 if (splitWord.indexOf(letter) == splitWord.indexOf(letter)) {
  dashes.push(letter);
  console.log()
}
 /// if the letter is not in the word, 
    else guessesRemaining--;
  }

  

  if (dashes===splitWord){
  //   alert("Yay, you win!");
  // }else if (splitWord.indexOf(letter) === true) {
  //   dashes.push(letter);
  // }else {
  //   guessesRemaining--;
  // }
}


function dashLetterChecker(splitWord, dashes) {
  
  if (splitWord===dashes) {
    alert("Yay! You won!");
  } else {
    guessesRemaining--;
  }
  
  }
  dashLetterChecker(splitWord, dashes);
  console.log(dashLetterChecker);
// ----------------// pseudocode//-------------------//

//  ---All game logic on a click event.
//on click will run function 
    // listen for key click
    // on first click only, run function: that picks word and sets dashes (I think I can set the rest of the functions within this function so it wont finish/call the function again until I tell it to by userguesses hitting 0 and triggering)
    //{ function will pick a random word from array
        // random word is represented on the screen by dashes
        // set user guess remaining count to 12
    //

// word vs dashes
//on user key click,
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


// /reset function

// if dash.charAt() at position [i] === randomWord.charAt(i)dash at position [i] then show letter
// else , deceremnet score by 1







// input letter-  if that matches something in the array, then we want to change from a dash to show the actual letter else remove a count from the guesses.

// function (input letter is user key)
// if { user key matches switch dash for letter.

// } else
// remove a guess from the user guess. decerment i--;





// var dashes = "";


// for (i = 0; i < randomWord.length; i++) {
//   if (randomWord.charAt(i) == " ") {
//     dashes += " ";
//   } else {
//     dashes += "-";
//   }
// }
// console.log("dashes:", dashes)


// expected output: "The character at index 4 is q"


// places the length of the word-- want to exchange 'wordLenght with a function that changes the letters to dashes
// document.getElementById("currentWordText").innerHTML=wordLength;


//function that changes letter to dashes (replace()) https://www.w3schools.com/jsref/jsref_replace.asp

// need to break each letter in the string to its own array? split() and use charAt(i)? https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split
//run if/else statement that checks each letter of the array against the user guess
//if it finds a correct letter then change displayed letter from dash to letter
// function dashFunction (){
  
  // }
//  ------------------ 
//   function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     var res = str.replace("Microsoft", "-");
//     document.getElementById("demo").innerHTML = res;
//   }
//   -------------------

// var array1 = ["apple", "banana", "carrot", "durian"];


// var map1 = randomWord.split("");
// console.log(map1);

// // replace position 1 of array with a dashes, position 2 with a dash etc
// function myFunction (i=0; i<randomWord.length; i++)  {
//   var res = randomWord.replace(([i]), "_");
//   document.getElementById("zebra").innerHTML = res;
// }