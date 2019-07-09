const ShipFactory = (length) => {
  const cells = [];
  cells.length = length;
  cells.fill(0);
  const isSunk = () => {
    return cells.every(cell => cell === 1 );
  };
  const hit = (cell) => {
    cells[cell] = 1;
    return cells;
  }
  return { length, cells, isSunk, hit }
};

module.exports = ShipFactory;

export { ShipFactory }