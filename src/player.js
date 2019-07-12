const playerFactory = (isHuman, active, board) => {

  const toggleActivePlayer = (opponent) => {
    active = !active;
    opponent.active = !opponent.active;
}
  const attack = (row, col, opponent) => {
    if (!active) return;

    if (opponent.board.receiveAttack(row, col)) {
      return 'hit';
    } else {
      console.log(opponent.active);
      toggleActivePlayer(opponent);
      console.log(opponent.active);
      return 'miss';
    }
  };

  return { isHuman, active, board, attack };
};

export default playerFactory;
