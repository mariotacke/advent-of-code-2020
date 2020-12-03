module.exports = (input) => {
  const map = input.split('\n').map((line) => line.trim().split(''));

  function trees(stepsX, stepsY) {
    let x = 0;
    let y = 0;
    let counter = 0;

    while (y < map.length) {
      x += stepsX;
      y += stepsY;

      if (y >= map.length) {
        return counter;
      }

      if (map[y][x % map[0].length] === '#') {
        counter++;
      }
    }
  }

  return trees(1, 1) * trees(3, 1) * trees(5, 1) * trees(7, 1) * trees(1, 2);
};
