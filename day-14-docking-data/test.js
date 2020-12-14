const assert = require('assert');

const docking = require('./docking');
const docking2 = require('./docking2');

describe('Day 14: Docking Data', () => {
  it('should sum values left in memory after execution', () => {
    const input =
      `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
       mem[8] = 11
       mem[7] = 101
       mem[8] = 0`;

    assert.strictEqual(docking(input), 165);
  });

  describe('Part Two', () => {
    it('should sum values left in memory after execution (v2)', () => {
      const input =
        `mask = 000000000000000000000000000000X1001X
         mem[42] = 100
         mask = 00000000000000000000000000000000X0XX
         mem[26] = 1`;

      assert.strictEqual(docking2(input), 208);
    });
  });
});
