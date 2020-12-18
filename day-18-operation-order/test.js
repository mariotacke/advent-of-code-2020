const assert = require('assert');

const order = require('./order');
const order2 = require('./order2');

describe('Day 18: Operation Order', () => {
  it('should solve expression #1', () => {
    assert.strictEqual(order('1 + 2 * 3 + 4 * 5 + 6'), 71);
  });

  it('should solve expression #2', () => {
    assert.strictEqual(order('1 + (2 * 3) + (4 * (5 + 6))'), 51);
  });

  it('should solve expression #3', () => {
    assert.strictEqual(order('2 * 3 + (4 * 5)'), 26);
  });

  it('should solve expression #4', () => {
    assert.strictEqual(order('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 437);
  });

  it('should solve expression #5', () => {
    assert.strictEqual(order('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 12240);
  });

  it('should solve expression #6', () => {
    assert.strictEqual(order('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 13632);
  });

  describe('Part Two', () => {
    it('should solve advanced expression #1', () => {
      assert.strictEqual(order2('1 + 2 * 3 + 4 * 5 + 6'), 231);
    });

    it('should solve advanced expression #2', () => {
      assert.strictEqual(order2('1 + (2 * 3) + (4 * (5 + 6))'), 51);
    });

    it('should solve advanced expression #3', () => {
      assert.strictEqual(order2('2 * 3 + (4 * 5)'), 46);
    });

    it('should solve advanced expression #4', () => {
      assert.strictEqual(order2('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 1445);
    });

    it('should solve advanced expression #5', () => {
      assert.strictEqual(order2('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 669060);
    });

    it('should solve advanced expression #6', () => {
      assert.strictEqual(order2('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 23340);
    });
  });
});
