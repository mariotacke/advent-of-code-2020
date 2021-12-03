const assert = require('assert');

const allergenAssessment = require('./allergen-assessment');
const allergenAssessment2 = require('./allergen-assessment2');

describe('Day 21: Allergen Assessment', () => {
  it('should count ingredients without allergens', () => {
    const input =
      `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
       trh fvjkl sbzzf mxmxvkd (contains dairy)
       sqjhc fvjkl (contains soy)
       sqjhc mxmxvkd sbzzf (contains fish)`;

    assert.strictEqual(allergenAssessment(input), 5);
  });

  describe('Part Two', () => {
    it('should output canonical dangerous ingredient list', () => {
      const input =
        `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
         trh fvjkl sbzzf mxmxvkd (contains dairy)
         sqjhc fvjkl (contains soy)
         sqjhc mxmxvkd sbzzf (contains fish)`;

      assert.strictEqual(allergenAssessment2(input), 'mxmxvkd,sqjhc,fvjkl');
    });
  });
});
