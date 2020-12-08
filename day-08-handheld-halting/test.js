const assert = require('assert');

const handheld = require('./handheld');
const handheld2 = require('./handheld2');

describe('Day 8: Handheld Halting', () => {
  it('should find accumulator value', () => {
    const instructions =
      `nop +0
       acc +1
       jmp +4
       acc +3
       jmp -3
       acc -99
       acc +1
       jmp -4
       acc +6`;

    assert.strictEqual(handheld(instructions), 5);
  });

  describe('Part Two', () => {
    it('should find accumulator value of patched boot code', () => {
      const instructions =
        `nop +0
         acc +1
         jmp +4
         acc +3
         jmp -3
         acc -99
         acc +1
         jmp -4
         acc +6`;

      assert.strictEqual(handheld2(instructions), 8);
    });
  });
});
