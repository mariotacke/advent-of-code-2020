const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

module.exports = (input) => {
  const buses = input
    .split('\n')[1]
    .split(',')
    .map((busId, position) => [+busId, position])
    .filter(([busId]) => !Number.isNaN(busId));

  let t = 0;
  let m = buses[0][0];

  for (let i = 0; i < buses.length; i++) {
    const routes = buses.slice(0, i + 1);

    while (!routes.every(([busId, position]) => (t + position) % busId === 0)) {
      t += m;
    }

    m = routes.reduce((m, [busId]) => lcm(m, busId), m);
  }

  return t;
};
