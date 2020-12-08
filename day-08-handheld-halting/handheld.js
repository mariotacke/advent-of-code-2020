module.exports = (input) => {
  const instructions = input.split('\n').map((line) => {
    const [, operation, value] = /(\w+) ([+-]\d+)/.exec(line.trim());

    return [operation, parseInt(value)];
  });

  let acc = 0;
  let i = 0;

  const executed = new Set();

  while (!executed.has(i)) {
    executed.add(i);

    const [operation, argument] = instructions[i];

    switch (operation) {
      case 'acc':
        acc += argument;
        i++;

        break;
      case 'jmp':
        i += argument;

        break;
      case 'nop':
        i++;

        break;
    }
  }

  return acc;
};
