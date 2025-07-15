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

  // Center HOME 3x3 (check first)
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');
    if (row === 7 && col === 7) {
      block.innerText = "HOME";
    }
  }

  // Safe Paths around the board (outer path loop)

  // Horizontal path
  else if (row === 6 || row === 8) {
    if (col > 5 && col < 9) {
      block.classList.add('white-path');
    }
    else if (col < 6) {
      block.classList.add('blue-safe');
    }
    else if (col > 8) {
      block.classList.add('green-safe');
    }
  }

  // Vertical path
  else if (col === 6 || col === 8) {
    if (row > 5 && row < 9) {
      block.classList.add('white-path');
    }
    else if (row < 6) {
      block.classList.add('red-safe');
    }
    else if (row > 8) {
      block.classList.add('yellow-safe');
    }
  }

  // Rest of the white path (inside squares)
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
