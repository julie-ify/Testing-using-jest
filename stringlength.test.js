
const stringLength = require('./stringlength.js');

test('count the length of string', () => {
  expect(stringLength('hello')).toBeGreaterThanOrEqual(1)
})

test('length of string greater than or equal to 1 and less than or equal to 10', () => {
  expect(stringLength('hello')).toBeLessThanOrEqual(10)
})
