import truncateString from '../utils/truncateString';
import string from '../text/gabi.json';


test('truncates a large string correctly and adds elipsis', () => {
  const expectedString = "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu..."
  expect(truncateString(string.bio)).toBe(expectedString);
});

test('returns null if it is passed anything but a string', () => {
  const notString = 12345678;
  expect(truncateString(notString)).toBe(null);
  
  const undefinedVar = undefined;
  expect(truncateString(undefinedVar)).toBe(null);

  const functionVar = () => {};
  expect(truncateString(functionVar)).toBe(null);
});

test('returns the string intact if it isn\'t >= 79 characters', () => {
  const smallString = "Hello world";
  expect(truncateString(smallString)).toBe(smallString);
});