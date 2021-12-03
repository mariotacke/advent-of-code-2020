const assert = require('assert');

const crabCombat = require('./crab-combat');

describe('Day 22: Crab Combat', () => {
  it('should compute winning player\'s score', () => {
    const input =
      `Player 1:
       9
       2
       6
       3
       1

       Player 2:
       5
       8
       4
       7
       10`;

    assert.strictEqual(crabCombat(input), 306);
  });
});
