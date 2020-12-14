const assert = require('assert');

const shuttle = require('./shuttle');
const shuttle2 = require('./shuttle2');

describe('Day 13', () => {
  it('should determine time-to-wait and bus ID', () => {
    const input =
      `939
       7,13,x,x,59,x,31,19`;

    assert.strictEqual(shuttle(input), 295);
  });

  describe('Part Two', () => {
    it('should determine earliest timestamp aligning to positions (#1)', () => {
      const input =
        `939
         7,13,x,x,59,x,31,19`;

      assert.strictEqual(shuttle2(input), 1068781);
    });

    it('should determine earliest timestamp aligning to positions (#2)', () => {
      const input =
        `0
         17,x,13,19`;

      assert.strictEqual(shuttle2(input), 3417);
    });

    it('should determine earliest timestamp aligning to positions (#3)', () => {
      const input =
        `0
         67,7,59,61`;

      assert.strictEqual(shuttle2(input), 754018);
    });

    it('should determine earliest timestamp aligning to positions (#4)', () => {
      const input =
        `0
         67,x,7,59,61`;

      assert.strictEqual(shuttle2(input), 779210);
    });

    it('should determine earliest timestamp aligning to positions (#5)', () => {
      const input =
        `0
         67,7,x,59,61`;

      assert.strictEqual(shuttle2(input), 1261476);
    });

    it('should determine earliest timestamp aligning to positions (#6)', () => {
      const input =
        `0
         1789,37,47,1889`;

      assert.strictEqual(shuttle2(input), 1202161486);
    });
  });
});
