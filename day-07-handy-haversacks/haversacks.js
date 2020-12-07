module.exports = (input) => {
  const rules = input.split('\n').reduce((rules, line) => {
    const [, color, otherColors] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    const compatibleWith = otherColors !== 'no other bags'
      ? otherColors.split(', ').map((other) => /(\w+ \w+) bags?/.exec(other)[1])
      : [];

    rules[color] = new Set();

    compatibleWith.forEach((otherColor) => rules[color].add(otherColor));

    return rules;
  }, {});

  const expand = (bag) => {
    const colors = [...rules[bag].values()];

    for (const color of rules[bag].values()) {
      colors.push(...expand(color));
    }

    return colors;
  };

  return Object
    .keys(rules)
    .filter((key) => expand(key).includes('shiny gold'))
    .length;
};
