const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  options.addition =
    options.addition === null
      ? "null"
      : options.addition === false
      ? "false"
      : options.addition;

  const add_str = new Array(options.additionRepeatTimes)
    .fill(options.addition)
    .join(options.additionSeparator);

  return new Array(options.repeatTimes)
    .fill(str + add_str)
    .join(options.separator);
}

module.exports = {
  repeater
};
