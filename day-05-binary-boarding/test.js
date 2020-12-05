const assert = require('assert');

const boardingPass = require('./boarding');

describe('Day 5: Binary Boarding', () => {
  it('should compute seat ID for FBFBBFFRLR', () => {
    assert.strictEqual(boardingPass('FBFBBFFRLR'), 357);
  });

  it('should compute seat ID for BFFFBBFRRR', () => {
    assert.strictEqual(boardingPass('BFFFBBFRRR'), 567);
  });

  it('should compute seat ID for FFFBBBFRRR', () => {
    assert.strictEqual(boardingPass('FFFBBBFRRR'), 119);
  });

  it('should compute seat ID for BBFFBBFRLL', () => {
    assert.strictEqual(boardingPass('BBFFBBFRLL'), 820);
  });
});
