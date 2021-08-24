const capitalize = (string) => {
  if(string === null || string === Number) {
    throw new Error('Accepts only string')
  } else {
    const firstChar = string.split('').slice(0, 1).join().toUpperCase();
    const restString = string.split('').slice(1).join('').toLowerCase();
    const capitalizedString = firstChar + restString;
    return capitalizedString;
  }

};

module.exports = capitalize;
