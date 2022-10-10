var readLineSync = require('readline-sync');

console.log("WELCOME TO HARRY POTTER QUIZ!");
console.log("********************************\n");

var username = readLineSync.question("Give me yor name\n");
console.log("\n");

console.log("Welcome, " + username + "!\n Let's start the game...!!")
var score = 0;

var question = [{
  question:
    `How did Harry Potter get his scar?
      a. given by Cho Chang in a fight
      b. in car accident
      c. Voldemort struck him with the Killing Curse when he was a baby
      d. None of above\n`,

  answer: "c"
},
{
  question: `When was the first Harry Potter book released?
a. 1997
b. 2001
c. 1985
d. 1995\n`,
  answer: "a"
},
{
  question: `What spell would you use to conjure a patronus?
a. Expecto Patronum
b. Avada Kedavra
c. Expelliarmus 
d. Alohomora\n`,
  answer: "a"
}, {
  question: `Who killed Dobby by throwing a knife at him?
a. Cedric Diggory
b. Bellatrix Lestrange
c. Dolores Umbridge
d. Severus Snape\n`,
  answer: "b"
}, {
  question: `Name Harry Potter's parents.
a. Percy, Charlie and Bill
b. Rowena Ravenclaw and Salazar Slytherin
c. Godric Gryffindor and Helga Hufflepuff
d. James and Lily Potter\n`,
  answer: "d"
}, {
  question: `What is the name of Harry Potter's owl?
a. Hedwig
b. Nagini
c. Fang
d. Griphook\n`,
  answer: "a"
}, {
  question: `Name the killing curse.
a. Avada Kedavra
b. Lumos
c. Riddikulus
d. Expecto Patronum\n`,
  answer: "a"
}, {
  question: `What relation was Sirius Black to Harry?
a. Godfather
b. Uncle
c. Professor 
d. Grandfather\n`,
  answer: "a"
}, {
  question: `What was the name of Lord Voldemort's loyal snake?
a. Scabbers
b. Fang
c. Nagini
d. Hedwig\n`,
  answer: "c"
}, {
  question: `Name Ron Weasley's pet rat.
a. stag
b. Scabbers
c. Horcrux
d. Acromantula\n`,
  answer: "b"
}]

var highScore = [{
  name: "Bhumika",
  score: 10
},
{
    name: "Abhinav",
    score: 10
},
{
  name: "Savita",
  score: 9
}
]

function play(question, answer) {
  var useranswer = readLineSync.question(question);
  if (useranswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You have selected: ", useranswer);
    console.log("Right answer!");
    console.log("---------------------------------------------\n");
    score = score + 1;
  } else {
    console.log("You have selected: ", useranswer);
    console.log("Wrong answer!");
    console.log("---------------------------------------------\n");
  }
}

for (i = 0; i < question.length; i++) {
  play(question[i].question, question[i].answer);
}

console.log("...............GAME OVER...............\n");
console.log("---------------------------------------------\n");
console.log("Thanks for Playing!\n")
if (score > 6) {
  console.log("YAY!, You Scored: " + score + "\n");
} else {
  console.log("Your final score is: " + score + "\n");
}

for (i = 0; i < highScore.length; i++) {
  if (score >= highScore[i].score) {
    console.log("Congratulations!! You are a high scorer! Please send me a screenshot, I will update the list!");
    break;
  }
}


// console.log("Check out the high scores. If you should be there, send me a screenshot, I will update it!")

console.log("---------------------------------------------\n");
// // console.log("Final score" + score);
console.log("Current high scorers are:")
for (i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " : " + highScore[i].score)
}