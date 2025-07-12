const grid = document.querySelector('.grid-container');

for (let i = 1; i <= 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';
  grid.appendChild(block);
}
