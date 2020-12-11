module.exports = (input) => {
  const seats = input.split('\n').map((line) => line.trim().split(''));

  const adjacencyMatrix = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0], /* X */  [1,  0],
    [-1,  1], [0,  1], [1,  1],
  ];

  const print = (state) => state.map((row) => row.join('')).join('\n');

  const cycle = (state) => state.map((row, y) => row.map((column, x) => {
    const occupiedNeighbors = adjacencyMatrix
      .map(([dx, dy]) => (state[y + dy] || [])[x + dx] || '.')
      .filter((seat) => seat === '#');

    return (column === 'L' && occupiedNeighbors.length === 0)
      ? '#'
      : (column === '#' && occupiedNeighbors.length >= 4)
        ? 'L'
        : column;
  }));

  let lastState = [];
  let currentState = seats;

  while (print(lastState) !== print(currentState)) {
    lastState = currentState;
    currentState = cycle(currentState);
  }

  return currentState.flat().filter((seat) => seat === '#').length;
};
