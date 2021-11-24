const rotate = (tile) => {
  const length = tile.length;

  for (let y = 0; y < length / 2; y++) {
    for (let x = y; x < length - y - 1; x++) {
      const value = tile[y][x];

      tile[y][x] = tile[x][length - y - 1];
      tile[x][length - y - 1] = tile[length - y - 1][length - x - 1];
      tile[length - y - 1][length - x - 1] = tile[length - x - 1][y];
      tile[length - x - 1][y] = value;
    }
  }

  return tile;
};

const flip = (tile) => {
  return tile.map((row) => [...row].reverse());
};

// const print = (tile) => {
//   return tile.map((row) => row.map(px => px ? '█' : ' ').join('')).join('\n');
// };

module.exports = (input) => {
  const tiles = input.split('\n\n').map((section) => {
    const lines = section.split('\n');

    const id = +/(\d+)/.exec(lines[0])[1];
    const tile = lines
      .slice(1)
      .map((line) => line.trim().split(''))//.map((px) => px === '#'));

    const edge = Array.from({ length: tile[0].length });

    const edges = [
      [...tile[0]].join(''),
      [...tile[0]].reverse().join(''),
      edge.map((_, i) => tile[i][tile[0].length - 1]).join(''),
      edge.map((_, i) => tile[i][tile[0].length - 1]).reverse().join(''),
      [...tile[tile.length - 1]].join(''),
      [...tile[tile.length - 1]].reverse().join(''),
      edge.map((_, i) => tile[i][0]).join(''),
      edge.map((_, i) => tile[i][0]).reverse().join(''),
    ];

    return { id, tile, edges };
  });

  let upperLeft = null;

  // find "upper left" tile
  for (let i = 0; i < tiles.length; i++) {
    const currentTile = tiles[i];
    const allOtherEdges = new Set([
      ...tiles.slice(0, i),
      ...tiles.slice(i + 1)
    ].reduce((allEdges, { edges }) => allEdges.concat(edges), []));

    let matches = currentTile.edges.reduce((count, edge) => {
      return count + allOtherEdges.has(edge);
    }, 0);

    console.log(matches, 'matches for', currentTile.id);
  }
};
