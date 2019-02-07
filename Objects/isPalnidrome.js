/*Check whether string is palindrome, or not.*/
function isPalindrome(str) {
    let newStr = str.toLowerCase();
    let length = newStr.length;
    let count = 0;
    if(newStr === '') {
        return false;
    }
    if(length % 2 === 0) {
        count = length / 2;
    } else {
        if(length === 1) {
            return true;
        } else {
            count = (length - 1) / 2;
        }
    }
    for (let i = 0; i < count; i++) {
                if (newStr[i] != newStr.slice(-1-i)[0]) {
                    return false;
                }
            }
            return true;

}
console.log(isPalindrome('madam'));
console.log(isPalindrome('shaqeeqahs'));



