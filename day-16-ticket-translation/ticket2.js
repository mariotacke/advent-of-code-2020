module.exports = (input) => {
  const blocks = input.split(/\n{2,}/);

  let fields = blocks[0].split('\n').map((field) => {
    const [, name, r1min, r1max, r2min, r2max] =
      /(.*): (\d+)-(\d+) or (\d+)-(\d+)/.exec(field);

    return [
      name.trim(),
      parseInt(r1min),
      parseInt(r1max),
      parseInt(r2min),
      parseInt(r2max),
    ];
  });

  const myTicket = blocks[1]
    .split('\n')
    .slice(1)
    .map((line) => line.split(',').map(Number))[0];

  const nearbyTickets = blocks[2]
    .split('\n')
    .slice(1)
    .map((line) => line.split(',').map(Number))
    .filter((ticket) => {
      return ticket.every((number) => fields
        .some(([, r1min, r1max, r2min, r2max]) =>
          (number >= r1min && number <= r1max) ||
          (number >= r2min && number <= r2max)));
    });

  const columns = Array
    .from({ length: myTicket.length })
    .map((_ , i) => [i, nearbyTickets.map((numbers) => numbers[i])]);

  let result = 1;

  while (columns.length) {
    const [column, numbers] = columns.shift();

    const matches = fields.filter(([, r1min, r1max, r2min, r2max]) => {
      return numbers.every((number) => (number >= r1min && number <= r1max) ||
                                       (number >= r2min && number <= r2max));
    });

    if (matches.length === 1) {
      fields = fields.filter(([name]) => name !== matches[0][0]);

      if (/departure/.test(matches[0][0])) {
        result *= myTicket[column];
      }
    } else {
      columns.push([column, numbers]);
    }
  }

  return result;
};
