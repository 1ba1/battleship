import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import './css/style.css';

let callback;

const makeMove = (e, board) => {
  const row = e.target.getAttribute('data-index')[0];
  const col = e.target.getAttribute('data-index')[1];
  if (board.receiveAttack(row, col)) {
    e.target.classList.add('hit');
  } else {
    e.target.classList.add('missed');
  }
  e.target.removeEventListener('click', callback);
};

const play = (player, computer) => {
  if (computer.active) {
    // random move
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
  callback = (e) => { makeMove(e, computerBoard) };
  [...divs].forEach((div) => {
    div.addEventListener('click', callback, false);
  })

  while (!playerBoard.allSunk() || !computerBoard.allSunk()) {
    play(player, computer);
  }
};


startGame();
//play();
