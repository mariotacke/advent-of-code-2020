module.exports = (input) => {
  const boardingPasses = new Set(input.split('\n').map((line) => {
    return parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2);
  }));

  for (const seatId of boardingPasses.values()) {
    if (!boardingPasses.has(seatId - 1) && boardingPasses.has(seatId - 2)) {
      return seatId - 1;
    }
  }
};
