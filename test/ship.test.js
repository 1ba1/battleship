import shipFactory from '../src/ship';

test('ship can get hit', () => {
  const ship = shipFactory(4);
  ship.hit(0);
  expect(ship.cells[0]).toEqual('X');
});

test('ship is not sunk', () => {
  const ship = shipFactory(1);
  expect(ship.isSunk()).toBe(false);
});

test('ship is sunk', () => {
  const ship = shipFactory(1);
  ship.hit(0);
  expect(ship.isSunk()).toBe(true);
});
