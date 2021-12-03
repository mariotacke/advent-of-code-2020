module.exports = (input) => {
  const foods = input.split('\n').map((line) => {
    const ingredients = new Set(/(.*) \(.*\)/.exec(line.trim())[1].split(' '));
    const allergens = new Set(/.* \(contains (.*)\)/.exec(line.trim())[1].split(', '));

    return {
      ingredients,
      allergens,
    };
  });

  const uniqueIngredients = new Set(foods.reduce((map, { ingredients }) => map.concat(...ingredients), []));
  const uniqueAllergens = new Set(foods.reduce((map, { allergens }) => map.concat(...allergens), []));
  const allergenExclusionMap = new Map([...uniqueIngredients].map((ingredient) => [ingredient, new Set()]));
  const ingredientCounts = new Map([...uniqueIngredients].map((ingredient) => [ingredient, 0]));

  for (let i = 0; i < foods.length; i++) {
    const { ingredients, allergens } = foods[i];
    const otherFoods = [...foods.slice(0, i), ...foods.slice(i + 1)];

    [...allergens].forEach((allergen) => {
      otherFoods.forEach(({ ingredients: otherIngredients }) => {
        [...otherIngredients]
          .forEach((otherIngredient) => {
            if (!ingredients.has(otherIngredient)) {
              const ingredientExclusions = allergenExclusionMap.get(otherIngredient);

              if (!ingredientExclusions.has(allergen)) {
                ingredientExclusions.add(allergen);
              }
            }
          });
      });
    });
  }

  foods.forEach(({ ingredients }) => {
    ingredients.forEach((ingredient) => {
      ingredientCounts.set(ingredient, ingredientCounts.get(ingredient) + 1);
    });
  });

  const ingredientsWithoutAllergens = [...allergenExclusionMap.entries()]
    .reduce((count, [ingredient, allergens]) => {
      return count + (allergens.size === uniqueAllergens.size ? ingredientCounts.get(ingredient) : 0);
    }, 0);

  return ingredientsWithoutAllergens;
};
