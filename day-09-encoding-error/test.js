const assert = require('assert');

const encoding = require('./encoding');
const encoding2 = require('./encoding2');

describe('Day 9: Encoding Error', () => {
  it('should find first number not summing to previous 5', () => {
    const input =
      `35
       20
       15
       25
       47
       40
       62
       55
       65
       95
       102
       117
       150
       182
       127
       219
       299
       277
       309
       576`;

    assert.strictEqual(encoding(input, 5), 127);
  });

  describe('Part Two', () => {
    it('should find encryption weakness', () => {
      const input =
        `35
         20
         15
         25
         47
         40
         62
         55
         65
         95
         102
         117
         150
         182
         127
         219
         299
         277
         309
         576`;

      assert.strictEqual(encoding2(input, 5), 62);
    });
  });
});
