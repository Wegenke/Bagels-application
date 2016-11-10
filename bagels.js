
var computerchoice1
var computerChoice2
var computerChoice3
var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];

var startGame = function(){
  do{
    computerChoice1 =Math.floor(Math.random() * 10);
    computerChoice2 =Math.floor(Math.random() * 10);
    computerChoice3 =Math.floor(Math.random() * 10);
  }
  while(computerChoice1 === computerChoice2 || computerChoice1 === computerChoice3 || computerChoice2 === computerChoice3)
}
startGame();
alert(startGame);
