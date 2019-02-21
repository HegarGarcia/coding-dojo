const RomanNumerals: { [key: number]: string } = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const RomanValues = [1000, 500, 100, 50, 10, 5, 1];

function toRomanNumeral(value: number): string {
  return converter(value, '', value.toString().length - 1);
}

function converter(value: number, result: string = '', index: number): string {
  const lastChar = value.toString().substr(0, 1);
  const potency = 10 ** index;
  const lastValue = +lastChar * potency;

  if (lastChar === '4' || lastChar === '9') {
    result += `${RomanNumerals[potency]}${RomanNumerals[lastValue + potency]}`;
    value -= lastChar === '4' ? 4 * potency : 9 * potency;
  } else {
    const closerLow: any = RomanValues.find((romanVal) => romanVal <= lastValue);
    value -= closerLow;
    result += RomanNumerals[closerLow];
  }

  return value > 0 ? converter(value, result, index - 1) : result;
}
