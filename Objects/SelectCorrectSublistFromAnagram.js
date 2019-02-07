/*Given a word and a list of possible anagrams, select the correct sublist.*/
/*“listen”, ["enlists" "google" "inlets" "banana"] =>  [“inlets”]   */

function removeChar(str,char) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== char) {
            newStr += str[i];
        }
    }
    return newStr;
}

function isAnagram(mainStr, subStr) {
    if(mainStr.length !== subStr.length) {
        return false;
    } else {
        for(let i = 0; i < mainStr.length; i++) {
            let currentSymbol = mainStr[i];
            let newStr = removeChar(subStr, currentSymbol);
            if(newStr === subStr && newStr !== '') {
                return false;
            } subStr = newStr;
        }
        return true;
    }
}

function getAnagram(str,list) {
    let res = [];
    for(let i = 0; i < list.length; i++) {
        if(isAnagram(str,list[i])) {
            res.push(list[i]);
        }
    }
    return res;
}
console.log( getAnagram("listen", ["enlists", "google", "inlets", "banana"]) );