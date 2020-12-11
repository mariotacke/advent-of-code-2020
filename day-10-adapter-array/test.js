const assert = require('assert');

const adapter = require('./adapter');
const adapter2 = require('./adapter2');

describe('Day 10: Adapter Array', () => {
  it('should multiply 1-jolt and 3-jolt differences (#1)', () => {
    const input =
      `16
       10
       15
       5
       1
       11
       7
       19
       6
       12
       4`;

    assert.strictEqual(adapter(input), 35);
  });

  it('should multiply 1-jolt and 3-jolt differences (#2)', () => {
    const input =
      `28
       33
       18
       42
       31
       14
       46
       20
       48
       47
       24
       23
       49
       45
       19
       38
       39
       11
       1
       32
       25
       35
       8
       17
       7
       9
       4
       2
       34
       10
       3`;

    assert.strictEqual(adapter(input), 220);
  });

  describe('Part Two', () => {
    it('should determine distinct adapter configurations (#1)', () => {
      const input =
        `16
         10
         15
         5
         1
         11
         7
         19
         6
         12
         4`;

      assert.strictEqual(adapter2(input), 8);
    });

    it('should determine distinct adapter configurations (#2)', () => {
      const input =
        `28
         33
         18
         42
         31
         14
         46
         20
         48
         47
         24
         23
         49
         45
         19
         38
         39
         11
         1
         32
         25
         35
         8
         17
         7
         9
         4
         2
         34
         10
         3`;

      assert.strictEqual(adapter2(input), 19208);
    });
  });
});
