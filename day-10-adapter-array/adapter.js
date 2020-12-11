module.exports = (input) => {
  const adapters = [0, ...input
    .split('\n')
    .map((x) => parseInt(x))
    .sort((a, b) => a - b)];

  let ones = 0;
  let threes = 1;

  for (let i = 0; i < adapters.length - 1; i++) {
    const difference = adapters[i + 1] - adapters[i];

    difference === 1 ? ones++ : difference === 3 ? threes++ : 0;
  }

  return ones * threes;
};
