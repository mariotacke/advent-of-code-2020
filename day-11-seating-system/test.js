const assert = require('assert');

const seating = require('./seating');
const seating2 = require('./seating2');

describe('Day 11: Seating System', () => {
  it('should simulate occupied seats in equilibrium', () => {
    const input =
      `L.LL.LL.LL
       LLLLLLL.LL
       L.L.L..L..
       LLLL.LL.LL
       L.LL.LL.LL
       L.LLLLL.LL
       ..L.L.....
       LLLLLLLLLL
       L.LLLLLL.L
       L.LLLLL.LL`;

    assert.strictEqual(seating(input), 37);
  });

  describe('Part Two', () => {
    it('should simulate occupied seats in equilibrium again', () => {
      const input =
        `L.LL.LL.LL
         LLLLLLL.LL
         L.L.L..L..
         LLLL.LL.LL
         L.LL.LL.LL
         L.LLLLL.LL
         ..L.L.....
         LLLLLLLLLL
         L.LLLLLL.L
         L.LLLLL.LL`;

      assert.strictEqual(seating2(input), 26);
    });
  });
});
