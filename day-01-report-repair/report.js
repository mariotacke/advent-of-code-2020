module.exports = (input) => {
  const numbers = input.split('\n').map((line) => parseInt(line));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        return numbers[i] * numbers[j];
      }
    }
  }
};
