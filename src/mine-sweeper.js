const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let list = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];

        for (let k = 0; k < matrix[i].length; k++) {
            let beforeEl = matrix[i][k - 1] ? 1 : 0;
            let nextEl = matrix[i][k + 1] ? 1 : 0;
            let upLeftEl = 0;
            let upRightEl = 0;
            let upEl = 0;
            let downLeftEl = 0;
            let downRightEl = 0;
            let downEl = 0;
            let counter = 0;
            if (matrix[i - 1]) {
                upLeftEl = matrix[i - 1][k - 1] ? 1 : 0;
                upEl = matrix[i - 1][k] ? 1 : 0;
                upRightEl = matrix[i - 1][k + 1] ? 1 : 0;
            }
            if (matrix[i + 1]) {
                downLeftEl = matrix[i + 1][k - 1] ? 1 : 0;
                downEl = matrix[i + 1][k] ? 1 : 0;
                downRightEl = matrix[i + 1][k + 1] ? 1 : 0;
            }
            counter = beforeEl + nextEl + upRightEl + upLeftEl + upEl + downRightEl + downLeftEl + downEl;
            row.push(counter);
        }
        list.push(row);
    }
    return list;
}

module.exports = {
  minesweeper
};
