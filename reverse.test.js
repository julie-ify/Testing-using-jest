const reverseString = require('./reverse.js');

test('reverse a string that is not null', () => {
  expect(reverseString('hello')).toBe('olleh')
})

