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

  // Safe Paths (Fixed Colors & White Tips)

  // Blue safe path (bottom to center)
  else if (col === 7 && row > 5 && row < 9) {
    block.classList.add('blue-safe');
  }
  else if (col === 7 && row === 14) {   // bottom tip should be white
    block.classList.add('white-path');
  }

  // Red safe path (left to center)
  else if (row === 7 && col > 5 && col < 9) {
    block.classList.add('red-safe');
  }
  else if (row === 7 && col === 14) {   // right tip should be white
    block.classList.add('white-path');
  }

  // Green safe path (top to center)
  else if (col === 7 && row > 0 && row < 6) {
    block.classList.add('green-safe');
  }
  else if (col === 7 && row === 0) {   // top tip should be white
    block.classList.add('white-path');
  }

  // Yellow safe path (right to center)
  else if (row === 7 && col > 0 && col < 6) {
    block.classList.add('yellow-safe');
  }
  else if (row === 7 && col === 0) {   // left tip should be white
    block.classList.add('white-path');
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
