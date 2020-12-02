module.exports = (input) => {
  return input.split('\n').reduce((numberOfValidPasswords, line) => {
    const [, min, max, character, password] =
      /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(line);

    const count = password.split('').filter((c) => c === character).length;

    return count >= min && count <= max
      ? numberOfValidPasswords + 1
      : numberOfValidPasswords;
  }, 0);
};
