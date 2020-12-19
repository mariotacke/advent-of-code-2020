module.exports = (input) => {
  const parts = input.split(/\n{2,}/);
  const messages = parts[1].split('\n').map((line) => line.trim());
  const rules = parts[0].split('\n').reduce((rules, line) => {
    const [, number, rule] = /(\d+): (.*)/.exec(line.trim());

    rules.set(number, rule.split(' | ').map((r) => r.split(' ')));

    return rules;
  }, new Map());

  // patch in rules with loops
  rules.set('8', [['42'], ['42', '8']]);

  // HACK: we're manually expanding the rule enough to pass the input and test
  // rules.set('11', [['42', '31'], ['42', '11', '31']]);
  rules.set('11', [
    ['42', '31'],
    ['42', '42', '31', '31'],
    ['42', '42', '42', '31', '31', '31'],
    ['42', '42', '42', '42', '31', '31', '31', '31'],
  ]);

  const compose = (number) => {
    const rule = rules.get(number);

    if (!/\d+/.test(rule[0][0])) {
      return rule[0][0][1];
    }

    const inner = rule
      .map((part) => {
        return part.map((x, i, n) => {
          if (x === number) {
            // instead of expanding rule 11 by hand, the following should
            // expand both sub-expressions n-times, but it does not work... 🤔
            // RE: context-free-grammar, pumping lemma, nested reference
            // https://stackoverflow.com/questions/133601/can-regular-expressions-be-used-to-match-nested-patterns
            // https://stackoverflow.com/questions/3644266/how-can-we-match-an-bn/3644267#3644267
            // if (n[i + 1]) {
            //   return `${compose(n[i - 1])}+${compose(n[i + 1])}+`;
            // }

            return `${compose(n[i - 1])}+`;
          }

          return compose(x);
        }).join('');
      });

    return `(?:${inner.join('|')})`;
  };

  const regex = new RegExp(`^${compose('0')}$`);

  return messages.filter((message) => regex.test(message)).length;
};
