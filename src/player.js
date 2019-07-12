const playerFactory = (active, board) => {

  const toggleActivePlayer = (opponent) => {
    active = !active;
    opponent.active = !opponent.active;
  };

  const attack = (row, col, opponent) => {
    //if (!active) return;

    if (opponent.board.receiveAttack(row, col)) {
      return 'hit';
    } else {
      //toggleActivePlayer(opponent);
      return 'miss';
    }
  };

  return { active, board, attack };
};

export default playerFactory;
