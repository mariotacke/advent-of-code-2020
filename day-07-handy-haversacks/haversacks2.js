module.exports = (input) => {
  const rules = input.split('\n').reduce((rules, line) => {
    const [, color, otherColors] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    const compatibleWith = otherColors !== 'no other bags'
      ? otherColors.split(', ').map((other) => {
        const [, units, color] = /(\d+) (\w+ \w+) bags?/.exec(other);

        return { units: parseInt(units), color };
      })
      : [];

    rules.set(color, []);

    compatibleWith.forEach((otherColor) => rules.get(color).push(otherColor));

    return rules;
  }, new Map());

  const traverse = (bag) => {
    let total = 0;

    for (const { color, units } of rules.get(bag)) {
      total += units + units * traverse(color);
    }

    return total;
  };

  return traverse('shiny gold');
};
