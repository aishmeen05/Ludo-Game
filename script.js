const grid = document.querySelector('.grid-container');

for (let i = 0; i < 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';

  const row = Math.floor(i / 15);
  const col = i % 15;

  // Corner zones
  if (row < 6 && col < 6) block.classList.add('red-zone');
  else if (row < 6 && col > 8) block.classList.add('yellow-zone');
  else if (row > 8 && col < 6) block.classList.add('blue-zone');
  else if (row > 8 && col > 8) block.classList.add('green-zone');

  // ✅ Single beautiful center diamond block
  else if (i === 112) block.classList.add('center-home');

  grid.appendChild(block);
}

