const grid = document.querySelector('.grid-container');

for (let i = 0; i < 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';

  const row = Math.floor(i / 15);
  const col = i % 15;

  // Top-left Red Zone
  if (row < 6 && col < 6) {
    block.classList.add('red-zone');
  }

  // Top-right Yellow Zone
  else if (row < 6 && col > 8) {
    block.classList.add('yellow-zone');
  }

  // Bottom-left Blue Zone
  else if (row > 8 && col < 6) {
    block.classList.add('blue-zone');
  }

  // Bottom-right Green Zone
  else if (row > 8 && col > 8) {
    block.classList.add('green-zone');
  }

  // Center HOME area (3x3 block)
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');
    if (row === 7 && col === 7) {
      block.innerText = "HOME";
    }
  }

  // White Path area
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
