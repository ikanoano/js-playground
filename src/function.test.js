const pow = require('./function');

test('common pow tests', () => {
  expect(pow(2, 1)).toBe(2);
  expect(pow(2, 0)).toBe(1);
  expect(pow(5, 0)).toBe(1);
  expect(pow(5, 5)).toBe(5*5*5*5*5);
})

test('pow doesnt take negative values', () => {
  expect(pow(2, -1)).toBe(NaN);
  expect(pow(2, -100)).toBe(NaN);
})

test('pow doesnt take floating values', () => {
  expect(pow(2,  0.5)).toBe(NaN);
  expect(pow(2, -0.5)).toBe(NaN);
  expect(pow(2, 20.01)).toBe(NaN);
})

