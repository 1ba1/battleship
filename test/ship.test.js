const ShipFactory = require('../src/ship');

test('ship can get hit', () => {
  const ship = ShipFactory(4);
  ship.hit(0);
  expect(ship.cells[0]).toEqual('X');
}); 

test('ship is not sunk', () => {
  const ship = ShipFactory(1);
  expect(ship.isSunk()).toBe(false);
}); 

test('ship is sunk', () => {
  const ship = ShipFactory(1);
  ship.hit(0);
  expect(ship.isSunk()).toBe(true);
}); 
