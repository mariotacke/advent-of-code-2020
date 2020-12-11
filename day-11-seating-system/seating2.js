module.exports = (input) => {
  const seats = input.split('\n').map((line) => line.trim().split(''));

  const adjacencyMatrix = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0], /* X */  [1,  0],
    [-1,  1], [0,  1], [1,  1],
  ];

  const print = (state) => state.map((row) => row.join('')).join('\n');

  const marcher = (state, x, y) => ([dx, dy]) => {
    let steps = 1;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [px, py] = [x + dx * steps, y + dy * steps];

      if (!state[py] || !state[py][py]) {
        return '.';
      }

      if (state[py][px] !== '.') {
        return state[py][px];
      }

      steps++;
    }
  };

  const cycle = (state) => state.map((row, y) => row.map((column, x) => {
    const occupiedNeighbors = adjacencyMatrix
      .map(marcher(state, x, y))
      .filter((seat) => seat === '#');

    return (column === 'L' && occupiedNeighbors.length === 0)
      ? '#'
      : (column === '#' && occupiedNeighbors.length >= 5)
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
