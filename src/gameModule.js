import playerFactory from './player';
import gameboardFactory from './gameboard';
import DOMModule from './DOMModule';
import randomCoordinates from './utilities';
import './css/style.css';

const gameModule = (() => {
  const checkForWin = (player, computer) => {
    if (player.board.allSunk() || computer.board.allSunk()) {
      player.active = false;
      computer.active = false;
      const message = document.getElementById('message');
      if (computer.board.allSunk) {
        message.textContent = 'Human Player Wins!';
      } else {
        message.textContent = 'Computer Wins!';
      }
      return true;
    } else {
      return false;
    }
  };

  const attack = (attacker, opponent, row, col, div) => {
    if (!attacker.active) return;

    const result = opponent.board.receiveAttack(row, col) ? 'hit' : 'miss';
    DOMModule.addClassToDiv(div, result);
    if (result === 'miss') {
      attacker.active = false;
      opponent.active = true;
    }
    return result;
  };

  const computerMove = (player, computer) => {
    let row, col;
    let validMove = false;

    while (!validMove) {
      const coordinates = randomCoordinates();
      row = coordinates[0];
      col = coordinates[1];
      const pastMovesIndex = computer.pastMoves.findIndex(
        (arr) => arr[0] === row && arr[1] === col
      );
      if (pastMovesIndex === -1) validMove = true;
    }

    computer.pastMoves.push([row, col]);

    const div = document.getElementById(`${row}${col}`);

    attack(computer, player, row, col, div);

    checkForWin(player, computer)
  };

  const cleanBoard = (query, id) => {
    const children = document.querySelectorAll(query);
    const parent = document.getElementById(id);

    [...children].forEach((child) => {
      parent.removeChild(child);
    });
  };

  const startGame = () => {
    const playerBoardDiv = document.getElementById('playerBoard');
    const computerBoardDiv = document.getElementById('computerBoard');
    const playerBoard = gameboardFactory();
    const computerBoard = gameboardFactory();
    const playerShips = playerBoard.initializeBoard();
    const computerShips = computerBoard.initializeBoard();
    const player = playerFactory(true, playerBoard, null);
    const computer = playerFactory(false, computerBoard, []);
    DOMModule.displayBoard(playerBoardDiv, player.board.matrix);
    DOMModule.displayBoard(computerBoardDiv, null);
    DOMModule.displayShips(playerShips);

    const computerBoardDivs = document.querySelectorAll('.computerBoard');

    const callback = (e) => {
      const row = e.target.getAttribute('data-index')[0];
      const col = e.target.getAttribute('data-index')[1];

      attack(player, computer, +row, +col, e.target);

      if (!checkForWin(player, computer)) {
        while (computer.active) {
          computerMove(player, computer);
        }
      } 
    };

    [...computerBoardDivs].forEach((div) => {
      div.addEventListener('click', callback, false);
    });
  };

  const randomize = document.getElementById('randomize');
  randomize.addEventListener('click', () => {
    cleanBoard('.playerBoard', 'playerBoard');
    cleanBoard('.computerBoard', 'computerBoard');
    startGame();
  }, false);

  return { startGame }
})();

export default gameModule;
