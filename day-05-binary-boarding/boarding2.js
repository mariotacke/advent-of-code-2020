module.exports = (input) => {
  const boardingPasses = new Set([...input.split('\n').map((line) => {
    const bits = line.split('').map((bit) => /F|L/.test(bit) ? 0 : 1).join('');
    const row = parseInt(bits.slice(0, 7), 2);
    const column = parseInt(bits.slice(7), 2);

    return row * 8 + column;
  })]);

  for (const seatId of boardingPasses.values()) {
    if (!boardingPasses.has(seatId - 1) && boardingPasses.has(seatId - 2)) {
      return seatId - 1;
    }
  }
};
