module.exports = (input) => {
  const adapters = [0, ...input
    .split('\n')
    .map((x) => parseInt(x))
    .sort((a, b) => a - b)];

  const ratings = adapters.map((rating) => {
    return adapters.filter((otherRating) => {
      return rating > otherRating && rating - 3 <= otherRating;
    }).length;
  });

  for (let i = 0; i < ratings.length; i++) {
    const previous = ratings.slice(i - ratings[i], i);

    ratings[i] = previous.length ? previous.reduce((a, b) => a + b, 0) : 1;
  }

  return ratings.slice(-1)[0];
};
