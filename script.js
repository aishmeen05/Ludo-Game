const grid = document.querySelector('.grid-container');

for (let i = 0; i < 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';

  const row = Math.floor(i / 15);
  const col = i % 15;

  // Top-left (Red zone)
  if (row < 6 && col < 6) {
    block.classList.add('red-zone');
  }
  // Top-right (Yellow zone)
  else if (row < 6 && col > 8) {
    block.classList.add('yellow-zone');
  }
  // Bottom-left (Blue zone)
  else if (row > 8 && col < 6) {
    block.classList.add('blue-zone');
  }
  // Bottom-right (Green zone)
  else if (row > 8 && col > 8) {
    block.classList.add('green-zone');
  }
  // Center Home (3x3 block)
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');
  }

  grid.appendChild(block);
}
