import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import './css/style.css';

const play = () => {
  const player = playerFactory(true);
  // const computer = playerFactory(false);
  const playerBoard = gameboardFactory();
  const computerBoard = gameboardFactory();
  const playerShips = playerBoard.initializeBoard();
  const computerShips = computerBoard.initializeBoard();
  const playerBoardDiv = document.getElementById('playerBoard');
  const computerBoardDiv = document.getElementById('computerBoard');
  DOMModule.displayBoard(playerBoardDiv, player.gameboard.matrix);
  DOMModule.displayBoard(computerBoardDiv, null);
  DOMModule.displayShips(playerShips);
};

play();
