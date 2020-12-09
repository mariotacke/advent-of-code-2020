const contiguous = (numbers, sum) => {
  for (let i = 0; i < numbers.length; i++) {
    let total = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const subTotal = total + numbers[j];

      if (subTotal > sum) {
        break;
      } else if (subTotal === sum) {
        const range = numbers.slice(i, j);

        return Math.min(...range) + Math.max(...range);
      } else {
        total += numbers[j];
      }
    }
  }
};

module.exports = (input, preamble = 25) => {
  const numbers = input.split('\n').map((line) => parseInt(line));

  const contains = (sum, range) => {
    return [...range.values()].some((number) => range.has(sum - number));
  };

  for (let i = preamble; i < numbers.length; i++) {
    if (!contains(numbers[i], new Set(numbers.slice(i - preamble, i)))) {
      return contiguous(numbers, numbers[i]);
    }
  }
};
