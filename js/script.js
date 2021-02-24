let countOne = 0, countTwo = 0, buttonRock = document.getElementById('button-rock'), buttonPaper = document.getElementById('button-paper'), buttonScissors = document.getElementById('button-scissors');

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
    countOne = countOne + 1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz! :)');
    countOne = countOne + 1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz! :)');
    countOne = countOne + 1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('REMIS!');
  } else {
    printMessage('Przegrywasz...');
    countTwo = countTwo + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printResult('Twój wynik to: ' + countOne + ', wynik komputera to: ' + countTwo);
}

buttonRock.addEventListener('click', function(){
  buttonClicked('kamień');});
buttonPaper.addEventListener('click', function(){
  buttonClicked('papier');});
buttonScissors.addEventListener('click', function(){
  buttonClicked('nożyce');});