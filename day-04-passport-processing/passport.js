function validate(passport) {
  const requiredFields = ['ecl', 'pid','eyr', 'hcl','byr', 'iyr', 'hgt'];
  const fields = passport
    .split('\n')
    .join(' ')
    .split(' ')
    .map((field) => /(\w+):/.exec(field)[1]);

  return requiredFields.every((field) => fields.includes(field));
}

module.exports = (input) => {
  return input.split(/\n{2,}/g).filter(validate).length;
};
