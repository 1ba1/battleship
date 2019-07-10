const ShipFactory = (length) => {
  const cells = [];
  cells.length = length;
  cells.fill(0);
  const isSunk = () => {
    return cells.every(cell => cell === 'X' );
  };
  const hit = (cell) => {
    cells[cell] = 'X';
    return cells;
  }
  return { length, cells, isSunk, hit }
};

export default ShipFactory;

module.exports = ShipFactory;