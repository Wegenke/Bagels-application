function getRandomNumber(){
  return Math.floor(Math.random() * 10);
}

var computerchoice1, computerChoice2, computerChoice3;
var guessDigit1, guessDigit2, guessDigit3;

function startGame(){
  do{
    computerChoice1 = getRandomNumber();
    computerChoice2 = getRandomNumber();
    computerChoice3 = getRandomNumber();
  } while(computerChoice1 === computerChoice2 
  || computerChoice1 === computerChoice3 
  || computerChoice2 === computerChoice3
  || computerChoice1 == 0
  || computerChoice2 == 0
  || computerChoice3 == 0
  );
  document.getElementById('guessButton').disabled = false;
}

document.getElementById('startGame').addEventListener('click', function(){
  startGame();
  console.log(computerChoice1, computerChoice2, computerChoice3);
});

function getUserGuess(){
  guessDigit1 = document.getElementById("guess1").value;
  guessDigit2 = document.getElementById("guess2").value;
  guessDigit3 = document.getElementById("guess3").value;
}

function compareUserVsComputer1(){
   if (computerChoice1 == guessDigit1) return "pico";
    else if (computerChoice1 == guessDigit2 || computerChoice1 == guessDigit3)return  'fermi';
    else return  "";
}
function compareUserVsComputer2(){
  if (computerChoice2 == guessDigit2) return  "pico";
  else if (computerChoice2 == guessDigit1 || computerChoice2 == guessDigit3) return  'fermi';
  else return  "";
}
function compareUserVsComputer3(){
  if (computerChoice3 == guessDigit3) return "pico";
  else if (computerChoice3 == guessDigit2 || computerChoice1 == guessDigit1) return  'fermi';
  else return "";
}

// function returnLastGuess(){
//   var guessLine1 =
//   //  = "Guess 1: " + guessDigit1 + "     Guess 2: " + guessDigit2 + "     Guess 3: " + guessDigit3 + "!!!" + "<br>";
//   document.getElementById('guesses').innerHTML += guessLine;
// }

document.getElementById('guessButton').addEventListener('click', function(){
  getUserGuess();
  compareUserVsComputer1();
  compareUserVsComputer2();
  compareUserVsComputer3();
  // console.log(compareUserVsComputer1(), compareUserVsComputer2(), compareUserVsComputer3());
  // returnLastGuess();
  if (compareUserVsComputer1() === "" && compareUserVsComputer2() === "" && compareUserVsComputer3() === "") alert('BAGELS');
  var gameTable = document.getElementById('guesses');
  var nextRow = gameTable.insertRow();
  var firstGuess = nextRow.insertCell(0);
    firstGuess.innerHTML = guessDigit1;
  var secondGuess = nextRow.insertCell(1);
    secondGuess.innerHTML = guessDigit2;
  var thirdGuess = nextRow.insertCell(2);
    thirdGuess.innerHTML = guessDigit3;
  var attemptResults = nextRow.insertCell(3);
    attemptResults.innerHTML = (compareUserVsComputer1() + " " + compareUserVsComputer2() +" "+compareUserVsComputer3());
    
});

// var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];



