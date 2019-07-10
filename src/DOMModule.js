const DOMModule = (() => {
  const displayBoard = (parent, matrix) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        div.setAttribute('data-index', `${i}${j}`);
        if (matrix !== null && matrix[i][j] !== ' ' && matrix[i][j] !== 'M') {
          div.classList.add('ship');
        }
        parent.appendChild(div);
      }
    }
  };

  return { displayBoard }
})();
