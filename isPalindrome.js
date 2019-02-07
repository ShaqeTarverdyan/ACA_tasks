//Given a string. Check is it Palindrome (write with split, revert, join functions).
function split(str) {
    if (typeof str === 'string') {
      let arr = [];
      let length = str.length;
      for (let i = 0; i < length; i++) {
        arr[i] = str[i];
      }
      return arr;
    }
    return [];
  }
  function revert(arr) {
    if (Array.isArray(arr)) {
      let revertedArr = [];
      let length = arr.length;
      for (let i = length - 1, j = 0; i >= 0; i--, j++) {
        revertedArr[j] = arr[i];
      }
      return revertedArr;
    }
    return arr;
  }
  function join(arr) {
    if (Array.isArray(arr)) {
      let str = '';
      let length = arr.length;
      for (let i = 0; i < length; i++) {
        str += arr[i];
      }
      return str;
    }
    return '';
  }
  function isPalindrome(str) {
    let splittedStr = split(str);
    let revertedSplittedStr = revert(splittedStr);
    let revertedStr = join(revertedSplittedStr);
    return revertedStr === str;
  //   return join(revert(split(str))) === str;
  }
  
  console.log(isPalindrome('Armenia'));