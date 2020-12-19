module.exports = (input) => {
  const parts = input.split(/\n{2,}/);
  const messages = parts[1].split('\n').map((line) => line.trim());
  const rules = parts[0].split('\n').reduce((rules, line) => {
    const [, number, rule] = /(\d+): (.*)/.exec(line.trim());

    rules.set(number, rule.split(' | ').map((r) => r.split(' ')));

    return rules;
  }, new Map());

  const compose = (number) => {
    const rule = rules.get(number);

    return !/\d+/.test(rule[0][0])
      ? rule[0][0][1]
      : `(?:${rule.map((part) => part.map((x) => compose(x)).join('')).join('|')})`;
  };

  const regex = new RegExp(`^${compose('0')}$`);

  return messages.filter((message) => regex.test(message)).length;
};
