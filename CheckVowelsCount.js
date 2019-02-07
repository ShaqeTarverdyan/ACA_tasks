//Write a function to find the count of all vowels in a given string.

const VOWELS = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'];
function getVowelsCount(word) {
  let vowelsCount = 0;
  let length = word.length;
  for (let i = 0; i < length; i++) {
    if(isVowel(word[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
function isVowel(character) {
  for (let i = 0; i < 10; i++) {
    if (character === VOWELS[i]) {
      return true;
    }
  }
  return false;
}
console.log(getVowelsCount('eyelashes'));