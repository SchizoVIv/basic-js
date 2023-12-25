const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let x = '';
  let list = [];
  for (let i = 0; i < str.length; i++) {
    if (list.length === 0 || list[list.length - 1] === str[i]) {
      list.push(str[i]);
    } else {
      x += `${list.length === 1 ? '' : list.length}${list[0]}`;
      list = [];
      list.push(str[i]);
    }
  }
  if (list.length) {
    x += `${list.length === 1 ? '' : list.length}${list[0]}`;
  }
  return x;
}

module.exports = {
  encodeLine
};
