const assert = require('assert');

const password = require('./password');
const password2 = require('./password2');

describe('Day 2: Password Philosophy', () => {
  it('should validate passwords', () => {
    const input =
      `1-3 a: abcde
       1-3 b: cdefg
       2-9 c: ccccccccc`;

    assert.strictEqual(password(input), 2);
  });

  describe('Part Two', () => {
    it('should validate passwords again', () => {
      const input =
        `1-3 a: abcde
         1-3 b: cdefg
         2-9 c: ccccccccc`;

      assert.strictEqual(password2(input), 1);
    });
  });
});
