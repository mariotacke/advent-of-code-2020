module.exports = (input, cycles = 6) => {
  let cubes = input.split('\n').reduce((state, line, y) => {
    line.trim().split('').forEach((cube, x) => {
      if (cube === '#') { state.add(`${x},${y},0,0`); }
    });

    return state;
  }, new Set());

  const getNeighbors = (xyzw) => {
    const neighbors = [];
    const [x, y, z, w] = xyzw.split(',').map(Number);

    for (let vz = -1; vz <= 1; vz++) {
      for (let vy = -1; vy <= 1; vy++) {
        for (let vx = -1; vx <= 1; vx++) {
          for (let vw = -1; vw <= 1; vw++) {
            neighbors.push(`${x + vx},${y + vy},${z + vz},${w + vw}`);
          }
        }
      }
    }

    return neighbors;
  };

  const cycle = (state) => {
    const neighbors = [...state.values()].reduce((cubes, key) => {
      getNeighbors(key).forEach((cube) => cubes.add(cube));

      return cubes;
    }, new Set());

    return [...neighbors.values()].reduce((cubes, key) => {
      const numberOfNeighbors = getNeighbors(key).reduce((count, cube) => {
        return state.has(cube) && cube !== key ? count + 1 : count;
      }, 0);

      if (state.has(key) && numberOfNeighbors >= 2 && numberOfNeighbors <= 3) {
        cubes.add(key);
      } else if (!state.has(key) && numberOfNeighbors === 3) {
        cubes.add(key);
      }

      return cubes;
    }, new Set());
  };

  for (let i = 0; i < cycles; i++) {
    cubes = cycle(cubes);
  }

  return cubes.size;
};
