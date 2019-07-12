const playerFactory = (isHuman, active, board) => {

  const attack = (row, col, opponent) => {
    if (opponent.board.receiveAttack(row, col)) {
      return 'hit';
    } else {
      console.log(opponent.active);
      active = !active;
      opponent.active = !opponent.active;
      console.log(opponent.active);
      return 'miss';
    }
  };

  const toggleActivePlayer = (player) => {
  }
  return { isHuman, active, board, attack };
};

export default playerFactory;
