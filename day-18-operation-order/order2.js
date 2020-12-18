module.exports = (input) => {
  const evaluate = (expression) => {
    return expression.split(' * ').reduce((sum, part) => {
      return sum * part.split(' + ').reduce((total, x) => total + +x, 0);
    }, 1);
  };

  const solve = (expression) => {
    const innerExpressionStart = expression.lastIndexOf('(');
    const innerExpressionEnd = expression.indexOf(')', innerExpressionStart);

    if (innerExpressionStart === -1) {
      const sum = evaluate(expression);

      return sum;
    } else {
      const left = expression.slice(0, innerExpressionStart);
      const right = expression.slice(innerExpressionEnd + 1);
      const innerExpression = expression.slice(innerExpressionStart + 1, innerExpressionEnd);
      const nextExpression = `${left}${evaluate(innerExpression)}${right}`;

      return solve(nextExpression);
    }
  };

  const results = input.split('\n').map(solve);

  return results.reduce((a, b) => a + b, 0);
};
