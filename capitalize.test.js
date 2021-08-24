const capitalize = require('./capitalize.js');

test('capitalize string is true', () => {
  expect(capitalize('hello')).toBe('Hello');
});
