module.exports = (input) => {
  return input.split('\n').map((line) => {
    const bits = line.split('').map((bit) => /F|L/.test(bit) ? 0 : 1).join('');
    const row = parseInt(bits.slice(0, 7), 2);
    const column = parseInt(bits.slice(7), 2);

    return row * 8 + column;
  }).sort((a, b) => b - a)[0];
};
