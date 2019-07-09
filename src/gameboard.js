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
      for (let i = coordinates[1]; i < coordinates[1] + l; i++) {
        matrix[row][i] = ship;
      }
    } else {
      let col = coordinates[1];
      for (let i = coordinates[0]; i < coordinates[0] + l; i++) {
        matrix[i][col] = ship;
      }
    }
    return matrix;
  };
  return { matrix, placeShip };
};

module.exports = gameboardFactory;
