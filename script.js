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

  // Center HOME (9 black blocks with "HOME" text in center)
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');
    if (row === 7 && col === 7) {
      block.innerText = "HOME";
    }
  }

  // Safe Paths (Corrected)
  else if (col === 7 && row < 6 && row > 0) {
    block.classList.add('yellow-safe');
  }
  else if (row === 7 && col > 8 && col < 14) {
    block.classList.add('green-safe');
  }
  else if (col === 7 && row > 8 && row < 14) {
    block.classList.add('blue-safe');
  }
  else if (row === 7 && col < 6 && col > 0) {
    block.classList.add('red-safe');
  }

  // Starting Points
  else if (row === 6 && col === 1) {
    block.classList.add('start-red');
  }
  else if (row === 13 && col === 6) {
    block.classList.add('start-blue');
  }
  else if (row === 8 && col === 13) {
    block.classList.add('start-green');
  }
  else if (row === 1 && col === 8) {
    block.classList.add('start-yellow');
  }

  // ⭐️ Safe Stars (Neutral Safe Zones)
else if (
    (row === 8 && col === 2) ||
    (row === 12 && col === 8) ||
    (row === 6 && col === 12) ||
    (row === 2 && col === 6)
  ) {
    block.classList.add('star-spot');
    block.innerText = "⭐️";
}

  // White path
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
