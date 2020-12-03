const assert = require('assert');

const trajectory = require('./trajectory');
const trajectory2 = require('./trajectory2');

describe('Day 3: Toboggan Trajectory', () => {
  it('should count trees on the way down', () => {
    const input =
      `..##.......
       #...#...#..
       .#....#..#.
       ..#.#...#.#
       .#...##..#.
       ..#.##.....
       .#.#.#....#
       .#........#
       #.##...#...
       #...##....#
       .#..#...#.#`;

    assert.strictEqual(trajectory(input), 7);
  });

  describe('Part Two', () => {
    it('should count and multiply trees on the way down', () => {
      const input =
        `..##.......
         #...#...#..
         .#....#..#.
         ..#.#...#.#
         .#...##..#.
         ..#.##.....
         .#.#.#....#
         .#........#
         #.##...#...
         #...##....#
         .#..#...#.#`;

      assert.strictEqual(trajectory2(input), 336);
    });
  });
});
