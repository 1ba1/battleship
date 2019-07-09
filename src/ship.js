const ShipFactory = (length) => {
  const hits = [];
  hits.length = length;
  hits.fill(0);
  const isSunk = () => {
    return hits.every(cell => cell === 1 );
  };
  const hit = (cell) => {
    hits[cell] = 1;
    return hits;
  }
  return { length, hits, isSunk, hit }
};

module.exports = ShipFactory;