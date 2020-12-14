module.exports = (input) => {
  const lines = input.split('\n');
  const memory = new Map();

  let bitmask;

  const mask = (value) => {
    const address = value.toString(2).padStart(36, '0').split('');
    const result = bitmask.map((bit, i) => bit === 'X' ? 'X' : bit === '0' ? address[i] : bit);
    const numberOfFloats = result.filter((bit) => bit === 'X').length;

    const floats = Array
      .from({ length: Math.pow(2, numberOfFloats) })
      .map((_, i) => {
        const combination = i.toString(2).padStart(numberOfFloats, '0').split('');
        const float = result.map((bit) => bit === 'X' ? combination.shift() : bit);

        return parseInt(float.join(''), 2);
      });

    return floats;
  };

  for (const line of lines) {
    if (/mask/.test(line)) {
      bitmask = /mask = (.*)/.exec(line)[1].split('');
    } else if (/mem/.test(line)) {
      const [, address, value] = /mem\[(\d+)\] = (\d+)/.exec(line);
      const addresses = mask(+address);

      addresses.forEach((address) => memory.set(address, +value));
    }
  }

  return [...memory.values()].reduce((a, b) => a + b, 0);
};
