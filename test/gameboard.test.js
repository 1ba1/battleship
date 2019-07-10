const gameboardFactory = require('../src/gameboard').default;

test('board can place ships', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(4, true, [0, 0]);
  for (let i = 0; i < gameboard.matrix.length; i++) {
    for (let j = 0; j < gameboard.matrix.length; j++) {
      if (i === 0 && j < 4) {
        expect(typeof gameboard.matrix[i][j]).toBe('object');
      } else {
        expect(gameboard.matrix[i][j]).toBe(' ');
      }
    }
  }
});

test('board cannot place ships out of bounds', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(4, true, [0, 7]);
  for (let i = 0; i < gameboard.matrix.length; i++) {
    for (let j = 0; j < gameboard.matrix.length; j++) {
      expect(gameboard.matrix[i][j]).toBe(' ');
    }
  }
});

test('board can receive attack on a ship', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(4, true, [0, 0]);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
});

test('board can receive attack on an empty cell', () => {
  const gameboard = gameboardFactory();
  expect(gameboard.receiveAttack(0, 0)).toEqual([0, 0]);
});

test('all ships are sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(1, true, [0, 0]);
  gameboard.placeShip(1, true, [3, 7]);
  gameboard.matrix[0][0].hit(0);
  gameboard.matrix[3][7].hit(0);
  expect(gameboard.allSunk()).toBe(true);
});

test('not all ships are sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(1, true, [0, 0]);
  gameboard.placeShip(1, true, [3, 7]);
  gameboard.matrix[0][0].hit(0);
  expect(gameboard.allSunk()).toBe(false);
});
