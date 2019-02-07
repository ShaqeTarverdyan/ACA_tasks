/*Given a substring and a string. Find how many times the substring occurred in the string.
 (For getting substring of the string use str.substring(startIndex, endIndex),
  str.substr(startIndex, length) )*/
  //‘ar’, ‘Are var far shared?’  3

  function getAppearedSubstringInString(substring, string, startIndex = 0, count = 0, length = substring.length) {
    if (string.substr(startIndex, length) === substring) {
            count++;
    }
    if (startIndex + length === string.length) {
        return count;
    }
    return getAppearedSubstringInString(substring, string, startIndex += 1, count, length = substring.length);
  }

console.log(getAppearedSubstringInString('ar', 'Are var far sharear'));
