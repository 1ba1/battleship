import shipFactory from './ship';
import { randomBoolean, randomCoordinates } from './utilities';

const gameboardFactory = () => {
  let matrix = [];
  matrix.length = 10;
  for (let n = 0; n < 10; n++) {
    matrix[n] = new Array(10).fill(' ');
  }

  const validHorizontalCoordinates = (x, y) => {
    if (
      matrix[x][y] !== ' '
      || (x < 9 && matrix[x + 1][y] !== ' ') 
      || (y < 9 && matrix[x][y + 1] !== ' ')
      ||
    )
  };

  const validVerticalCoordinates = (x, y) => {

  };

  const placeShip = (l, isHorizontal, coordinates) => {
    if (
      (isHorizontal && coordinates[1] + l > 10) ||
      (!isHorizontal && coordinates[0] + l > 10)
    )
      return -1;
    const ship = shipFactory(l, isHorizontal);
    if (isHorizontal) {
      let row = coordinates[0];
      for (
        let i = coordinates[1], count = 0;
        i < coordinates[1] + l;
        i++, count++
      ) {
        if (matrix[row][i] !== ' ') return -1;
        ship.cells[count] = [row, i];
        matrix[row][i] = ship;
      }
    } else {
      let col = coordinates[1];
      for (
        let i = coordinates[0], count = 0;
        i < coordinates[0] + l;
        i++, count++
      ) {
        if (matrix[i][col] !== ' ') return -1;
        ship.cells[count] = [i, col];
        matrix[i][col] = ship;
      }
    }
    return ship;
  };

  const receiveAttack = (x, y) => {
    if (matrix[x][y] === ' ') {
      matrix[x][y] = 'M';
      return [x, y];
    } else {
      const s = matrix[x][y];
      const i = s.cells.findIndex((arr) => arr[0] === x && arr[1] === y);
      s.hit(i);
      return true;
    }
  };

  const allSunk = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (
          matrix[i][j] !== ' ' &&
          matrix[i][j] !== 'M' &&
          !matrix[i][j].isSunk()
        )
          return false;
      }
    }
    return true;
  };

  const initializeBoard = () => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let placedShips = [];

    while (count1 < 4) {
      const ship = placeShip(1, true, randomCoordinates());
      if (ship !== -1) {
        count1++;
        placedShips.push(ship);
      }
    }

    while (count2 < 3) {
      const ship = placeShip(2, randomBoolean(), randomCoordinates());
      if (ship !== -1) {
        count2++;
        placedShips.push(ship);
      }
    }

    while (count3 < 2) {
      const ship = placeShip(3, randomBoolean(), randomCoordinates());
      if (ship !== -1) {
        count3++;
        placedShips.push(ship);
      }
    }

    while (count4 < 1) {
      const ship = placeShip(4, randomBoolean(), randomCoordinates());
      if (ship !== -1) {
        count4++;
        placedShips.push(ship);
      }
    }

    return placedShips;
  };

  return {
    matrix,
    placeShip,
    receiveAttack,
    allSunk,
    initializeBoard,
  };
};

export default gameboardFactory;
