const reverseString = (string) => {
  let reverseString = string.split('').reverse().join('');
  if(string === '' ) {
    throw new Error('string must contain atleast one character')
  } else return reverseString;
  
}

module.exports = reverseString;