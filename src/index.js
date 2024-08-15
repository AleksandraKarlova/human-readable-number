module.exports = function toReadable (number) {
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  let ones = '';
  let tens = '';
  let hundreds = '';
  let finalNumber = '';

  let divideByTen = number % 10;

  if (number <= 20) {
    finalNumber = numbers[number];
  } else if (number < 100) {
    if (divideByTen !== 0) {
      ones = numbers[divideByTen];
      tens = numbers[number - divideByTen];
      finalNumber = tens + ' ' + ones;
    } else {
      finalNumber = numbers[number];
    }
  } else {
    if (number % 100 <= 20 && number % 100 !== 0) {
      tens = numbers[number % 100];
      hundreds = numbers[(number - number % 100) / 100] + ' ' + 'hundred';
      finalNumber = hundreds + ' ' + tens;
    } else if (number % 100 === 0) {
      finalNumber = numbers[number / 100] + ' ' + 'hundred';
    } else {
      tens = numbers[(number - divideByTen) % 100];
      hundreds = numbers[(number - (number - divideByTen) % 100 - divideByTen) / 100] + ' ' + 'hundred';
      finalNumber = hundreds + ' ' + tens;
      if (divideByTen !== 0) {
        ones = numbers[divideByTen];
        finalNumber = hundreds + ' ' + tens + ' ' + ones;
      };
    };
  };

  return finalNumber;
};
