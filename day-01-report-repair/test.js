const assert = require('assert');

const report = require('./report');
const report2 = require('./report2');

describe('Day 1: Report Repair', () => {
  it('should determine numbers adding to 2020', () => {
    const numbers =
      `1721
       979
       366
       299
       675
       1456`;

    assert.strictEqual(report(numbers), 514579);
  });

  describe('Part Two', () => {
    it('should determine three numbers adding to 2020', () => {
      const numbers =
        `1721
         979
         366
         299
         675
         1456`;

      assert.strictEqual(report2(numbers), 241861950);
    });
  });
});
