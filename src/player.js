import gameboardFactory from './gameboard';

const player = (isHuman) => {
  const gameboard = gameboardFactory();
  gameboard.initializeBoard();

  return { gameboard, isHuman }
};
