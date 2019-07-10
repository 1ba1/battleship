import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import './css/style.css';

const play = () => {
  const playerBoard = gameboardFactory();
  const computerBoard = gameboardFactory();
  const playerShips = playerBoard.initializeBoard();
  const computerShips = computerBoard.initializeBoard();
  const playerBoardDiv = document.getElementById('playerBoard');
  const computerBoardDiv = document.getElementById('computerBoard');
  DOMModule.displayBoard(playerBoardDiv, playerBoard.matrix);
  DOMModule.displayBoard(computerBoardDiv, null);
  DOMModule.displayShips(playerShips);
};

play();
