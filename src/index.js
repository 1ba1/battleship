import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import randomCoordinates from './utilities';
import './css/style.css';

const play = (player, computer) => {
  if (computer.active) {
    const row = randomCoordinates()[0];
    const col = randomCoordinates()[1];
    const div = document.getElementById(`${row}${col}`);
    const className = computer.attack(row, col, player);
    DOMModule.addClassToDiv(div, className);
  } else {
    // wait for click ...?
    console.log('human turn');
  }
};

const startGame = () => {
  const playerBoard = gameboardFactory();
  const computerBoard = gameboardFactory();
  const playerShips = playerBoard.initializeBoard();
  const computerShips = computerBoard.initializeBoard();
  const player = playerFactory(true, true, playerBoard);
  const computer = playerFactory(false, false, computerBoard);
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
    console.log(e.target);
    const className = player.attack(row, col, computer);
    DOMModule.addClassToDiv(e.target, className);
  };
  [...divs].forEach((div) => {
    div.addEventListener('click', callback, false);
  });

  // while (!player.board.allSunk() || !computer.board.allSunk()) {
  // }
  for(let i = 0; i<10; i++) {

    if (!player.active) {
      console.log("computer");
      const row = randomCoordinates()[0];
      const col = randomCoordinates()[1];
      const div = document.getElementById(`${row}${col}`);
      const className = computer.attack(row, col, player);
      DOMModule.addClassToDiv(div, className);
    } 
  }
};

startGame();
