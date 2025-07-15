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

  // Safe Paths

  // Red Safe Path
  else if ((col === 6 && row < 6) || (row === 6 && col === 7)) {
    block.classList.add('red-safe');
  }

  // Yellow Safe Path
  else if ((row === 6 && col > 8) || (col === 8 && row < 6)) {
    block.classList.add('yellow-safe');
  }

  // Blue Safe Path
  else if ((col === 6 && row > 8) || (row === 8 && col < 6)) {
    block.classList.add('blue-safe');
  }

  // Green Safe Path
  else if ((row === 8 && col > 8) || (col === 8 && row > 8)) {
    block.classList.add('green-safe');
  }

  // Center HOME 3x3
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');
    if (row === 7 && col === 7) {
      block.innerText = "HOME";
    }
  }

  // White Path
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
