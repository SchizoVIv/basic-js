const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(noReverse = true){
    this.noReverse = noReverse;
  }

  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!')
    }

    let res = [];
    let counter = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    while (message.length > key.length){
      key += key;
    }

    for (let i = 0; i < message.length; i++){

      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        res.push(String.fromCharCode((message[i].charCodeAt() + key[counter].charCodeAt() + 26) % 26 + 65) );
        counter++;
      } else {
        res.push(message[i])
      }

    }

    if (!this.noReverse){
      return res.reverse().join('');
    }

    return res.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key){
      throw new Error('Incorrect arguments!')
    }

    let res = [];
    let counter = 0;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    while (encryptedMessage.length > key.length){
      key += key;
    }
    for (let i = 0; i < encryptedMessage.length; i++){
      if (encryptedMessage[i].charCodeAt() > 64 && encryptedMessage[i].charCodeAt() < 91) {
        res.push(String.fromCharCode((encryptedMessage[i].charCodeAt() - key[counter].charCodeAt() + 26) % 26 + 65) );
        counter++;
      } else {
        res.push(encryptedMessage[i])
      }
    }
    if (!this.noReverse){
      return res.reverse().join('');
    }
    return res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
