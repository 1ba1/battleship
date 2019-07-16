import gameModule from './gameModule';
import DOMModule from './DOMModule';

const randomize = document.getElementById('randomize');
randomize.addEventListener(
  'click',
  () => {
    DOMModule.cleanBoard('.playerBoard', 'playerBoard');
    DOMModule.cleanBoard('.computerBoard', 'computerBoard');
    gameModule.startGame();
  },
  false
);

const play = document.getElementById('play');
play.addEventListener(
  'click',
  () => {
    const computerBoardDivs = document.querySelectorAll('.computerBoard');
    [...computerBoardDivs].forEach((div) => {
      div.classList.remove('inactive');
    });
    DOMModule.addClassToDiv(randomize, 'hide');
    DOMModule.addClassToDiv(play, 'hide');
  },
  false
);

gameModule.startGame();
