const assert = require('assert');

const cubes = require('./cubes');
const cubes2 = require('./cubes2');

describe('Day 17: Conway Cubes', () => {
  it('should calculate how many cubes are left after six cycles', () => {
    const input =
      `.#.
       ..#
       ###`;

    assert.strictEqual(cubes(input), 112);
  });

  describe('Part Two', () => {
    it('should calculate how many cubes are left after six cycles (4 dimensions)', () => {
      const input =
        `.#.
         ..#
         ###`;

      assert.strictEqual(cubes2(input), 848);
    });
  });
});
