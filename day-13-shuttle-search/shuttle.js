module.exports = (input) => {
  const lines = input.split('\n');
  const notBeforeTimestamp = parseInt(lines[0]);
  const schedules = lines[1].split(',').filter((item) => item !== 'x').map(Number);

  let earliestBus;
  let earliestTimestamp = Infinity;

  for (let i = 0; i < schedules.length; i++) {
    const schedule = schedules[i];
    const earliestAfterTimestamp = Math.ceil(notBeforeTimestamp / schedule) * schedule;

    if (earliestAfterTimestamp < earliestTimestamp) {
      earliestTimestamp = earliestAfterTimestamp;
      earliestBus = schedule;
    }
  }

  return earliestBus * (earliestTimestamp - notBeforeTimestamp);
};
