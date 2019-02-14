const RomanNotation = new Map([
  ['(M)', 1000000],
  ['(D)', 500000],
  ['(C)(D)', 400000],
  ['(C)', 100000],
  ['(L)', 50000],
  ['(X)(L)', 40000],
  ['(X)', 10000],
  ['(V)', 5000],
  ['M(V)', 4000],
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]);

function NumberToRoman(value: number) {
  if (value > 3999999) {
    throw new Error('Valor debe ser inferior a 3,999,999');
  }

  let result = '';
  let numCopy = value;

  RomanNotation.forEach((romanValue, romanNumeral) => {
    const amount = Math.floor(numCopy / romanValue);
    numCopy -= amount * romanValue;
    result += romanNumeral.repeat(amount);
  });

  return result;
}

export default NumberToRoman;
