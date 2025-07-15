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

  // Red path (bottom to center edge)
  else if (col === 7 && row > 8) {
    block.classList.add('red-safe');
  }

  // Yellow path (left to center edge)
  else if (row === 7 && col < 6) {
    block.classList.add('yellow-safe');
  }

  // Blue path (right to center edge)
  else if (row === 7 && col > 8) {
    block.classList.add('blue-safe');
  }

  // Green path (top to center edge)
  else if (col === 7 && row < 6) {
    block.classList.add('green-safe');
  }

  // Center Home (3x3 black block)
  else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    block.classList.add('center-home');

    if (row === 7 && col === 7) {
      block.innerText = "HOME";
      block.style.color = "white";
      block.style.fontSize = "10px";
    }
  }

  // White Path
  else {
    block.classList.add('white-path');
  }

  grid.appendChild(block);
}
