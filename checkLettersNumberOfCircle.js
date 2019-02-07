/*Given a string and a number. Change each letter character in a string adding that
number to a character code. Be sure to keep character between letters’ codes. Return
new string.*/


function shiftString(word, number) {
  let shiftedWord = '';
  let length = word.length;
  for (let i = 0; i < length; i++) {
    shiftedWord += shiftChar(word[i], number);
  }
  return shiftedWord;
}
function shiftChar(char, number) {
  let charCode = char.charCodeAt(0);
  let numberToBeInRange = number % 26;
  let newCode = charCode + numberToBeInRange;
  if (newCode > 122) {
    newCode = 96 + newCode % 122;
  }
  let newChar = String.fromCharCode(newCode);
  return newChar;
}
console.log(shiftString('abcdefghijklmnopqrstuvwxyz', 17));

