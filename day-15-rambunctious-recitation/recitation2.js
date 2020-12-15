module.exports = (input, recitations = 30000000) => {
  const lines = input.split(',').map(Number);
  const history = {};

  const add = (number, turn) => {
    const entry = history[number] || [];

    entry.length === 2 && entry.shift();
    entry.push(turn);

    history[number] = entry;
  };

  lines.forEach((number, i) => add(number, i + 1));

  let lastNumberSpoken = lines.slice(-1)[0];

  for (let i = lines.length + 1; i <= recitations; i++) {
    const entry = history[lastNumberSpoken];

    lastNumberSpoken = entry.length === 1
      ? 0
      : entry.reduce((a, b) => b - a, 0);

    add(lastNumberSpoken, i);
  }

  return lastNumberSpoken;
};
