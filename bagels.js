function getRandomNumber(){
  return Math.floor(Math.random() * 10);
};

var computerchoice1, computerChoice2, computerChoice3;
var guessDigit1, guessDigit2, guessDigit3;
var response = "";

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
};

document.getElementById('startGame').addEventListener('click', function(){
  startGame();
  console.log(computerChoice1, computerChoice2, computerChoice3);
});

function getUserGuess(){
  guessDigit1 = document.getElementById("guess1").value;
  guessDigit2 = document.getElementById("guess2").value;
  guessDigit3 = document.getElementById("guess3").value;
};

function compareUserVsComputer1(){
   if (computerChoice1 == guessDigit1){
    return response = "pico";
  } else if (computerChoice1 == guessDigit2 || computerChoice1 == guessDigit3){
    return response = 'fermi';
  } else {
    return response = "bagel";
  }
};
function compareUserVsComputer2(){
  if (computerChoice2 == guessDigit2){
    return response = "pico";
  } else if (computerChoice2 == guessDigit1 || computerChoice2 == guessDigit3){
    return response = 'fermi';
  } else {
    return response = 'bagel';
  }
};
function compareUserVsComputer3(){
  if (computerChoice3 == guessDigit3){
   return response = "pico";
  }else if (computerChoice3 == guessDigit2 || computerChoice1 == guessDigit1){
   return response = 'fermi';
  } else {
   return response = 'bagel';
  }
};

document.getElementById('guessButton').addEventListener('click', function(){
  getUserGuess();
  compareUserVsComputer1();
  compareUserVsComputer2();
  compareUserVsComputer3();
  console.log(compareUserVsComputer1(), compareUserVsComputer2(), compareUserVsComputer3());
  if (compareUserVsComputer1() === "bagel" && compareUserVsComputer2() === 'bagel' && compareUserVsComputer3() === 'bagel'){
    alert('BAGELS');
  }
});

var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];



