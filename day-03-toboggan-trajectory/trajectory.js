module.exports = (input) => {
  const map = input.split('\n').map((line) => line.trim().split(''));

  let x = 0;
  let y = 0;
  let counter = 0;

  while (y < map.length) {
    x += 3;
    y += 1;

    if (y === map.length) {
      return counter;
    }

    if (map[y][x % map[0].length] === '#') {
      counter++;
    }
  }
};
