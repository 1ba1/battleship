import ShipFactory from './ship';

const gameboardFactory = () => {
  let matrix = [];
  matrix.length = 10;
  matrix.fill([]);
  matrix.forEach((row) => {
    row.length = 10;
    row.fill(0);
  });

  const placeShip = (l, isHorizontal, coordinates) => {
    const ship = ShipFactory(l);
    for (let i = 0; i < l; i++) {
      if (isHorizontal) {
        matrix[coordinates[0]][coordinates[1] + i] = ship;
      } else {
        matrix[coordinates[0] + i][coordinates[1]] = ship;
      }
    }
    console.log(matrix)
    return matrix;
  };
  return { matrix, placeShip };
};

module.exports = gameboardFactory;
