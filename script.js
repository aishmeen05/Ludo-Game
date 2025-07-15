const grid = document.querySelector('.grid-container');

for (let i = 0; i < 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';

  const row = Math.floor(i / 15);
  const col = i % 15;

  // Corner Zones
  if (row < 6 && col < 6) {
    block.classList.add('red-zone');
  }
  else if (row < 6 && col > 8) {
    block.classList.add('yellow-zone');
  }
  else if (row > 8 && col < 6) {
    block.classList.add('blue-zone');
  }
  else if (row > 8 && col > 8) {
    block.classList.add('green-zone');
  }

  // Color Safe Paths

  // Red path (bottom to center)
  else if (col === 7 && row > 5) {
    block.classList.add('red-safe');
  }

  // Yellow path (left to center)
  else if (row === 7 && col < 9) {
    block.classList.add('yellow-safe');
  }

  // Blue path (right to center)
  else if (row === 7 && col > 6) {
    block.classList.add('blue-safe');
  }

  // Green path (top to center)
  else if (col === 7 && row < 9) {
    block.classList.add('green-safe');
  }

  // Center Triangle (4 colors meet here)

  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-triangle');

    // Optional: Add inner text for style
    if (row === 7 && col === 7) {
      block.innerText = "★";
    }
  }

  // Rest of the white path
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
