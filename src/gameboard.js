import ShipFactory from './ship';

const gameboardFactory = () => {
  const matrix = [];
  matrix.length = 10;
  matrix.forEach((row) => {
    row.length = 10;
    row.fill(0);
  });

  const placeShip = (length, isHorizontal, coordinates) => {
    const ship = ShipFactory(length);
    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        matrix[coordinates[0]][coordinates[1] + i] = ship;
      } else {
        matrix[coordinates[0] + i][coordinates[1]] = ship;
      }
    }
    return matrix;
  };
  return { matrix, placeShip };
};

module.exports = gameboardFactory;
