// list of words for the computer to randomly choose from
var wordList=["apple", "banana", "carrot", "durian","eggplant","fennel","grapefruit", "huckleberry", "ice", "jalapeno", "kiwi", "lemons", "mangoes"]
console.log("word array", wordList);
var randomWord= wordList[Math.floor(Math.random()*wordList.length)];
console.log("randomly chosen word:", randomWord);

//not sure if I'll need this
var wordLength=randomWord.length;
console.log("var wordLength= :", wordLength);

var splitWord=randomWord.split();
console.log("var splitWord: = ", splitWord);

var splitWord=randomWord.split("");
console.log("var quoted splitWord: = ", splitWord);

//----------parses the random word into multiple characters---//
var sentence = randomWord;

for (let i=0; i<randomWord.length; i++){
console.log(sentence.charAt(i));
}


// -------------------- Good working code above------------------//



var dashes = "";


for (i = 0; i < randomWord.length; i++) {
  if (randomWord.charAt(i) == " ") {
    dashes += " ";
  } else {
    dashes += "-";
  }
}
console.log("dashes:", dashes)
// expected output: "The character at index 4 is q"


// places the length of the word-- want to exchange 'wordLenght with a function that changes the letters to dashes
document.getElementById("currentWordText").innerHTML=wordLength;


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

var array1 = ["apple", "banana", "carrot", "durian"];


var map1 = randomWord.split("");
console.log(map1);

// // replace position 1 of array with a dashes, position 2 with a dash etc
// function myFunction (i=0; i<randomWord.length; i++)  {
//   var res = randomWord.replace(([i]), "_");
//   document.getElementById("zebra").innerHTML = res;
// }