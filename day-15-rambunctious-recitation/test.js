const assert = require('assert');

const recitation = require('./recitation');
const recitation2 = require('./recitation2');

describe('Day 15: Rambunctious Recitation', () => {
  it('should recite 0,3,6 2020 times', () => {
    assert.strictEqual(recitation('0,3,6'), 436);
  });

  it('should recite 1,3,2 2020 times', () => {
    assert.strictEqual(recitation('1,3,2'), 1);
  });

  it('should recite 2,1,3 2020 times', () => {
    assert.strictEqual(recitation('2,1,3'), 10);
  });

  it('should recite 1,2,3 2020 times', () => {
    assert.strictEqual(recitation('1,2,3'), 27);
  });

  it('should recite 2,3,1 2020 times', () => {
    assert.strictEqual(recitation('2,3,1'), 78);
  });

  it('should recite 3,2,1 2020 times', () => {
    assert.strictEqual(recitation('3,2,1'), 438);
  });

  it('should recite 3,1,2 2020 times', () => {
    assert.strictEqual(recitation('3,1,2'), 1836);
  });

  describe('Part Two', () => {
    it.skip('should recite 0,3,6 30000000 times', () => {
      assert.strictEqual(recitation2('0,3,6'), 175594);
    });

    it.skip('should recite 1,3,2 30000000 times', () => {
      assert.strictEqual(recitation2('1,3,2'), 2578);
    });

    it.skip('should recite 2,1,3 30000000 times', () => {
      assert.strictEqual(recitation2('2,1,3'), 3544142);
    });

    it.skip('should recite 1,2,3 30000000 times', () => {
      assert.strictEqual(recitation2('1,2,3'), 261214);
    });

    it.skip('should recite 2,3,1 30000000 times', () => {
      assert.strictEqual(recitation2('2,3,1'), 6895259);
    });

    it.skip('should recite 3,2,1 30000000 times', () => {
      assert.strictEqual(recitation2('3,2,1'), 18);
    });

    it.skip('should recite 3,1,2 30000000 times', () => {
      assert.strictEqual(recitation2('3,1,2'), 362);
    });
  });
});
