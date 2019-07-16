const shipFactory = (length, isHorizontal) => {
  const cells = [];
  cells.length = length;
  cells.fill(0);
  const isSunk = () => {
    return cells.every((cell) => cell === 'X');
  };
  const hit = (cell) => {
    cells[cell] = 'X';
    return cells;
  };
  return { length, cells, isSunk, hit, isHorizontal };
};

export default shipFactory;
