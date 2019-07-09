import ShipFactory from './ship';

const gameboardFactory = () => {
  let matrix = [];
  matrix.length = 10;
  for (let n = 0; n < 10; n++) {
    matrix[n] = new Array(10).fill(' ');
  }

  const placeShip = (l, isHorizontal, coordinates) => {
    if (
      (isHorizontal && coordinates[1] + l > 10) ||
      (!isHorizontal && coordinates[0] + l > 10)
    )
      return -1;
    const ship = ShipFactory(l);
    if (isHorizontal) {
      let row = coordinates[0];
      for (let i = coordinates[1], count = 0; i < coordinates[1] + l; i++, count++) {
        ship.cells[count] = [row, i];
        matrix[row][i] = ship;
      }
    } else {
      let col = coordinates[1];
      for (let i = coordinates[0], count = 0; i < coordinates[0] + l; i++, count++) {
        ship.cells[count] = [i, col];
        matrix[i][col] = ship;
      }
    }
    return matrix;
  };

  const receiveAttack = (x, y) => {
    if (matrix[x][y] === ' ') {
      return [x, y];
    } else {
      const s = matrix[x][y];
      const i = s.cells.findIndex(arr => (arr[0]===x && arr[1]===y));
      s.hit(i);
      return true;
    }
  };

  return { matrix, placeShip, receiveAttack };
};

module.exports = gameboardFactory;
