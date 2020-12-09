module.exports = (input, preamble = 25) => {
  const numbers = input.split('\n').map((line) => parseInt(line));

  const contains = (sum, range) => {
    return [...range.values()].some((number) => range.has(sum - number));
  };

  for (let i = preamble; i < numbers.length; i++) {
    if (!contains(numbers[i], new Set(numbers.slice(i - preamble, i)))) {
      return numbers[i];
    }
  }
};
