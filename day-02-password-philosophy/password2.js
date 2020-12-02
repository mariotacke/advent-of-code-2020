module.exports = (input) => {
  return input.split('\n').reduce((numberOfValidPasswords, line) => {
    const [, min, max, character, password] =
      /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(line);

    if ((password[min - 1] === character && password[max - 1] !== character) ||
        (password[min - 1] !== character && password[max - 1] === character)) {
      numberOfValidPasswords++;
    }

    return numberOfValidPasswords;
  }, 0);
};
