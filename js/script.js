let counter1 = 0, counter2 = 0;
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {

  clearMessages();
  playerMove = argButtonName;

  console.log(argButtonName + ' został kliknięty');

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);

  displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {

  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);

  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie wiem jaki to ruch: ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {

  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz! :)');
    counter1 = counter1 + 1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz! :)');
    counter1 = counter1 + 1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz! :)');
    counter1 = counter1 + 1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('REMIS!');
  } else {
    printMessage('Przegrywasz...');
    counter2 = counter2 + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printResult('Twój wynik to: ' + counter1 + ', wynik komputera to: ' + counter2);
}

buttonRock.addEventListener('click', function(){
  buttonClicked('kamień');});
buttonPaper.addEventListener('click', function(){
  buttonClicked('papier');});
buttonScissors.addEventListener('click', function(){
  buttonClicked('nożyce');});