const assert = require('assert');

const ship = require('./ship');
const ship2 = require('./ship2');

describe('Day 12: Rain Risk', () => {
  it('should determine Manhattan distance to target', () => {
    const input =
      `F10
       N3
       F7
       R90
       F11`;

    assert.strictEqual(ship(input), 25);
  });

  describe('Part Two', () => {
    it('should determine Manhattan to target again', () => {
      const input =
        `F10
         N3
         F7
         R90
         F11`;

      assert.strictEqual(ship2(input), 286);
    });
  });
});
