import NumberToRoman from './index';

test('Should convert number to roman numeral', () => {
  expect(NumberToRoman(4)).toBe('IV');
  expect(NumberToRoman(8)).toBe('VIII');
  expect(NumberToRoman(10)).toBe('X');
  expect(NumberToRoman(1509)).toBe('MDIX');
  expect(NumberToRoman(33)).toBe('XXXIII');
  expect(NumberToRoman(147)).toBe('CXLVII');
  expect(NumberToRoman(365)).toBe('CCCLXV');
  expect(NumberToRoman(3999)).toBe('MMMCMXCIX');
  expect(NumberToRoman(4000)).toBe('M(V)');
  expect(NumberToRoman(3999999)).toBe(
    '(M)(M)(M)(D)(C)(D)(L)(X)(L)(V)M(V)CMXCIX',
  );
  expect(() => NumberToRoman(4000000)).toThrow();
});
