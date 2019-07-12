import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import randomCoordinates from './utilities';
import './css/style.css';

const checkForWin = (player, computer) => {
  if (player.board.allSunk() || computer.board.allSunk()) {
    console.log('there is a winner');
    return true;
  } else {
    return false;
  }
};

const computerMove = (player, computer) => {
  const coordinates = randomCoordinates();
  const row = coordinates[0];
  const col = coordinates[1];
  const div = document.getElementById(`${row}${col}`);
  const className = computer.attack(row, col, player);
  DOMModule.addClassToDiv(div, className);
  if (checkForWin(player, computer)) {
    // ...
  } else {
    console.log("computer");
    computer.active = false;
    player.active = true;
  }
};

const startGame = () => {
  const playerBoard = gameboardFactory();
  const computerBoard = gameboardFactory();
  const playerShips = playerBoard.initializeBoard();
  const computerShips = computerBoard.initializeBoard();
  const player = playerFactory(true, playerBoard);
  const computer = playerFactory(true, computerBoard);
  const playerBoardDiv = document.getElementById('playerBoard');
  const computerBoardDiv = document.getElementById('computerBoard');
  DOMModule.displayBoard(playerBoardDiv, playerBoard.matrix);
  DOMModule.displayBoard(computerBoardDiv, null);
  DOMModule.displayShips(playerShips);

  const divs = document.querySelectorAll('.computerBoard');

  const callback = (e) => {
    if (!player.active) return;

    const row = e.target.getAttribute('data-index')[0];
    const col = e.target.getAttribute('data-index')[1];
    const className = player.attack(row, col, computer);
    DOMModule.addClassToDiv(e.target, className);
    if (checkForWin(player, computer)) {
      // ...
    } else {
      player.active = false;
      computer.active = true;
      computerMove(player, computer);
    }
  };

  [...divs].forEach((div) => {
    div.addEventListener('click', callback, false);
  });

  // while (!player.board.allSunk() || !computer.board.allSunk()) {
  // }

};

startGame();
