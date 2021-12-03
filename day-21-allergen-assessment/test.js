const assert = require('assert');

const allergenAssessment = require('./allergen-assessment');

describe('Day 21: Allergen Assessment', () => {
  it('should count ingredients without allergens', () => {
    const input =
      `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
       trh fvjkl sbzzf mxmxvkd (contains dairy)
       sqjhc fvjkl (contains soy)
       sqjhc mxmxvkd sbzzf (contains fish)`;

    assert.strictEqual(allergenAssessment(input), 5);
  });
});
