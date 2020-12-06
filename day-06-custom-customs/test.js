const assert = require('assert');

const boardingPass = require('./customs');
const boardingPass2 = require('./customs2');

describe('Day 6: Custom Customs', () => {
  it('should sum counts of anyone answering yes', () => {
    const answers =
      `abc

       a
       b
       c

       ab
       ac

       a
       a
       a
       a

       b`;
    assert.strictEqual(boardingPass(answers), 11);
  });

  describe('Part Two', () => {
    it('should sum counts of everyone answering yes', () => {
      const answers =
        `abc

         a
         b
         c

         ab
         ac

         a
         a
         a
         a

         b`;
      assert.strictEqual(boardingPass2(answers), 6);
    });
  });
});
