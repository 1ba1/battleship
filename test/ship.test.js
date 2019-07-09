const ShipFactory = require('../src/ship');

test('ship can get hit', () => {
  const ship = ShipFactory(4);
  ship.hit(0);
  expect(ship.hits).toEqual([1,0,0,0]);
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
