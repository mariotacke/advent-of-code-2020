module.exports = (input) => {
  const blocks = input.split(/\n{2,}/);

  const fields = blocks[0].split('\n').map((field) => {
    const [, r1min, r1max, r2min, r2max] =
      /: (\d+)-(\d+) or (\d+)-(\d+)/.exec(field);

    return [
      parseInt(r1min),
      parseInt(r1max),
      parseInt(r2min),
      parseInt(r2max),
    ];
  });

  const nearbyTickets = blocks[2]
    .split('\n')
    .slice(1)
    .map((line) => line.split(',').map(Number));

  return nearbyTickets.flat().reduce((errorRate, ticket) => {
    if (!fields.some(([r1min, r1max, r2min, r2max]) =>
      (ticket >= r1min && ticket <= r1max) ||
      (ticket >= r2min && ticket <= r2max))) {
      errorRate += ticket;
    }

    return errorRate;
  }, 0);
};
