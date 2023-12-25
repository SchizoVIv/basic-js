const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (date instanceof Date && Object.getOwnPropertyNames(date).length === 0) {
    const month = date.getMonth();
    if (month === 1 || month === 0 || month === 11) {
      return "winter";
    }
    if (month === 3 || month === 4 || month === 2) {
      return "spring";
    }
    if (month === 5 || month === 6 || month === 7) {
      return "summer";
    }
    if (month === 8 || month === 9 || month === 10) {
      return "autumn";
    }
  } else throw new Error("Invalid date!");
}

module.exports = {
  getSeason
};
