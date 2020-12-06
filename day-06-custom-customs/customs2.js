module.exports = (input) => {
  return input.split(/\n{2,}/g).reduce((count, group) => {
    const answers = group.split('\n').map((answer) => answer.trim().split(''));

    return count + [...new Set(answers.flat())].reduce((sum, question) => {
      return answers.every((answer) => answer.includes(question)) ? ++sum : sum;
    }, 0);
  }, 0);
};
