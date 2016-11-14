var computerchoice1, computerChoice2, computerChoice3;
var guessDigit1, guessDigit2, guessDigit3;

function getRandomNumber(){
  return Math.floor(Math.random() * 10);
};

function startGame(){
  do{
    computerChoice1 = getRandomNumber;
    computerChoice2 = getRandomNumber;
    computerChoice3 = getRandomNumber;
  } while(computerChoice1 === computerChoice2 || computerChoice1 === computerChoice3 || computerChoice2 === computerChoice3)
};

function compareUserVsComputer1(){
  if (computerChoice1 === guessDigit1){
    return 'Pico';
  } else if (computerChoice1 === guessDigit2 || computerChoice1 === guessDigit3){
    return 'Fermi';
  } else {
    return 'null'
  }
};
function compareUserVsComputer2(){
  if (computerChoice2 === guessDigit2){
    return 'Pico';
  } else if (computerChoice2 === guessDigit1 || computerChoice2 === guessDigit3){
    return 'Fermi';
  } else {
    return 'null'
  }
};
function compareUserVsComputer3(){
  if (computerChoice3 === guessDigit3){
    return 'Pico';
  }else if (computerChoice3 === guessDigit2 || computerChoice1 === guessDigit1){
    return 'Fermi';
  }else {
    return 'null'
  }
};

function getUserGuess(){
  guessDigit1 = document.getElementById("guess1").value;
  guessDigit2 = document.getElementById("guess2").value;
  guessDigit3 = document.getElementById("guess3").value;
};

document.getElementById('guessButton').addEventListener('click', function(){
  getUserGuess();
  getRandomNumber();
});




startGame();
var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];
alert(compareUserVsComputer);
