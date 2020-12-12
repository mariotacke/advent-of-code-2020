const rotate = (origin, degrees) => (origin + degrees + 360) % 360;

module.exports = (input) => {
  const ship = input.split('\n').reduce((ship, line) => {
    const action = line.trim()[0];
    const value = parseInt(line.trim().slice(1));
    const heading = ship.heading;

    ship.x += action === 'E' ? value : action === 'W' ? -value : 0;
    ship.y += action === 'N' ? value : action === 'S' ? -value : 0;

    ship.heading =
      rotate(heading, action === 'L' ? value : action === 'R' ? -value : 0);

    if (action === 'F') {
      ship.x += heading === 0 ? value : heading === 180 ? -value : 0;
      ship.y += heading === 90 ? value : heading === 270 ? -value : 0;
    }

    return ship;
  }, { heading: 0, x: 0, y: 0 });

  return Math.abs(ship.x) + Math.abs(ship.y);
};
