const gameboardFactory = require('../src/gameboard');

test('board can place ships', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(4, true, [0,0]);
  expect(typeof gameboard.matrix[0][0]).toBe('object');
  expect(typeof gameboard.matrix[0][1]).toBe('object');
  expect(typeof gameboard.matrix[0][2]).toBe('object');
  expect(typeof gameboard.matrix[0][3]).toBe('object');
}); 