const DOMModule = (() => {
  const updateCell = () => {};
  
  const displayBoard = (parent, matrix) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        if (matrix === null){
          console.log(`${i}${j}`);
          div.setAttribute('data-index', `${i}${j}`);
          div.addEventListener('click', updateCell, false);
        } else if (matrix[i][j] !== ' ' && matrix[i][j] !== 'M') {
          div.setAttribute('id', `${i}${j}`);
          div.classList.add('ship');
        }
        parent.appendChild(div);
      }
    }
  };

  const displayShips = (ships) => {
    console.log(ships)
    ships.forEach(ship => {
      for (let i = 0; i< ship.cells.length; i++){
        const div = document.getElementById(`${ship.cells[i][0]}${ship.cells[i][1]}`);
        console.log(div)
        if (i === 0) div.classList.add('first-cell');
        if (i === ship.cells.length-1) div.classList.add('last-cell');
      }
    });
  };

  return { displayBoard, displayShips }
})();

export default DOMModule;
