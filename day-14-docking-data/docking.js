module.exports = (input) => {
  const lines = input.split('\n');
  const memory = new Map();

  let bitmask;

  const mask = (value) => {
    const bits = value.toString(2).padStart(36, '0').split('');
    const result = bitmask.map((bit, i) => bit === 'X' ? bits[i] : bit);

    return parseInt(result.join(''), 2);
  };

  for (const line of lines) {
    if (/mask/.test(line)) {
      bitmask = /mask = (.*)/.exec(line)[1].split('');
    } else if (/mem/.test(line)) {
      const [, address, value] = /mem\[(\d+)\] = (\d+)/.exec(line);

      memory.set(+address, mask(+value));
    }
  }

  return [...memory.values()].reduce((a, b) => a + b, 0);
};
