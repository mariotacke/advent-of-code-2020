module.exports = (input) => {
  const lines = input.split(',').map(Number);
  const history = {};

  const add = (number, turn) => {
    history[number] = [...(history[number] || []).slice(-1), turn];
  };

  lines.forEach((number, i) => add(number, i + 1));

  let lastNumberSpoken = lines.slice(-1)[0];

  for (let i = lines.length + 1; i <= 2020; i++) {
    lastNumberSpoken = history[lastNumberSpoken].length === 1
      ? 0
      : history[lastNumberSpoken].reduce((a, b) => b - a, 0);

    add(lastNumberSpoken, i);
  }

  return lastNumberSpoken;
};
