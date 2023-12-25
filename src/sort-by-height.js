const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if(arr[i] !== -1){
        sorting(i, 1)
      }
    }
  }

  function sorting(count, mod){
    if (arr[count + mod] === -1){
      sorting(count, mod+1)
    } else{
      if (arr[count] > arr[count + mod]) {
        let temp = arr[count];
        arr[count] = arr[count + mod];
        arr[count + mod] = temp;
      }
    }
  }

  return arr
}

module.exports = {
  sortByHeight
};
