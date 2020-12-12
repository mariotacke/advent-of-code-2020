const rotate = ([dx, dy], degrees) => {
  const rotations = {
    0: [dx, dy],
    90: [-dy, dx],
    180: [-dx, -dy],
    270: [dy, -dx],
  };

  return rotations[(degrees + 360) % 360];
};

module.exports = (input) => {
  const ship = input.split('\n').reduce((ship, line) => {
    const action = line.trim()[0];
    const value = parseInt(line.trim().slice(1));

    ship.wx += action === 'E' ? value : action === 'W' ? -value : 0;
    ship.wy += action === 'N' ? value : action === 'S' ? -value : 0;

    const [wx, wy] = rotate(
      [ship.wx, ship.wy],
      action === 'L' ? value : action === 'R' ? -value : 0
    );

    ship.wx = wx;
    ship.wy = wy;

    ship.x += action === 'F' ? ship.wx * value : 0;
    ship.y += action === 'F' ? ship.wy * value : 0;

    return ship;
  }, { x: 0, y: 0, wx: 10, wy: 1 });

  return Math.abs(ship.x) + Math.abs(ship.y);
};
