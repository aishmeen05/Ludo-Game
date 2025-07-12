const grid = document.querySelector('.grid-container');

for (let i = 0; i < 225; i++) {
  const block = document.createElement('div');
  block.className = 'block';

  // Define color zones based on grid position
  if (i < 45) block.classList.add('red-zone');               // Top 3 rows (15*3)
  else if (i >= 180) block.classList.add('green-zone');      // Bottom 3 rows
  else if (i % 15 === 0) block.classList.add('blue-zone');   // Left column
  else if ((i + 1) % 15 === 0) block.classList.add('yellow-zone'); // Right column
  else if (i === 112) block.classList.add('center-home');    // Center block

  grid.appendChild(block);
}
