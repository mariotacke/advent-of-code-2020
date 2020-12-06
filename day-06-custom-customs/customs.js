module.exports = (input) => {
  return input.split(/\n{2,}/g).reduce((count, group) => {
    const answers = group.split('\n').map((answer) => answer.trim());

    return count + new Set(answers.join('').split('')).size;
  }, 0);
};
