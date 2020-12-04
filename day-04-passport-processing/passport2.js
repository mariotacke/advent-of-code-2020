function validate(passport) {
  const requiredFields = ['ecl', 'pid','eyr', 'hcl','byr', 'iyr', 'hgt'];
  const fields = passport
    .split('\n')
    .join(' ')
    .split(' ')
    .reduce((keys, entry) => {
      const [, field, value] = /(\w+):(.*)/.exec(entry);

      keys[field] = value;

      return keys;
    }, {});

  if (!requiredFields.every((entry) => Object.keys(fields).includes(entry))) {
    return false;
  }

  const birthYear = +/(\d{4})/.exec(fields['byr'])[1];
  const issueYear = +/(\d{4})/.exec(fields['iyr'])[1];
  const expirationYear = +/(\d{4})/.exec(fields['eyr'])[1];
  const [, height, heightUnit] = fields['hgt'].match(/(\d+)(cm|in)?/);
  const hairColor = fields['hcl'];
  const eyeColor = fields['ecl'];
  const passportId = fields['pid'];

  return birthYear >= 1920 && birthYear <= 2002 &&
         issueYear >= 2010 && issueYear <= 2020 &&
         expirationYear >= 2020 && expirationYear <= 2030 &&
         (
           (heightUnit === 'cm' && +height >= 150 && +height <= 193) ||
           (heightUnit === 'in' && +height >= 59 && +height <= 76)
         ) &&
         /#[a-f0-9]{6}/.test(hairColor) &&
         /(amb|blu|brn|gry|grn|hzl|oth)/.test(eyeColor) &&
         /^\d{9}$/.test(passportId);
}

module.exports = (input) => {
  return input.split(/\n{2,}/g).filter(validate).length;
};
