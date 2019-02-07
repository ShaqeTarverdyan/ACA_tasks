/*5. Check entered password to meet the requirements.
a. It should contain at least eight characters.
b. It should consist of letters, digits and special symbols(*, !, @, $, ^)
c. It should contain at least two digits.
d. It should contain at least one symbol.
e. It should contain at at least one uppercase and one lowercase letters.
*/

function hasCorrectLength(pass) {
    return pass.length >= 8;
}


const NUMBERS = ['0','1','2','3','4','5','6','7','8','9'];
function hasDigit(pass) {
    let numbersCount = 0;
    for(let i = 0; i < pass.length; i++) {
        if(isNumber(pass[i])) {
            numbersCount +=1;
        }
    }
    if(numbersCount >= 2) {
        return true;
    }
    return false;
   return numbersCount; 
}

// check if a char is a number??
function isNumber(character) {
    for(let i = 0; i < NUMBERS.length; i++) {
        if(character === NUMBERS[i]) {
            return true;
        }
    }
    return false;
}
//-----------------------------------
function hasUpperCase(pass) {
    for(let i = 0; i < pass.length; i++) {
        if(pass[i] >= 'A' && pass[i] <= 'Z') {
            return true;
        }
    }
    return false;
}
//-----------------------------------
function hasLowerCase(pass) {
    for(let i = 0; i < pass.length; i++) {
        if(pass[i] >= 'a' && pass[i] <= 'z') {
            return true;
        }
    }
    return false;
}
//--------------------------------------------
const SYMBOLS = ['*', '!', '@', '$', '^'];
function hasSymbol(pass) {
    let symbolsCount = 0;
    for(let i = 0; i < pass.length; i++) {
        if(isSymbol(pass[i])) {
            symbolsCount += 1;
        }
    }
    if(symbolsCount >= 1) {
        return true;
    }
    return false;
    return symbolsCount;
}
function isSymbol(char) {
    for(let i = 0; i < SYMBOLS.length; i++) {
        if(char === SYMBOLS[i]) {
            return true;
        }
    }
    return false;
}  
function isCorrectPassword(pass) {
    if(hasCorrectLength(pass) && hasDigit(pass) && hasLowerCase(pass) && hasUpperCase(pass) && hasSymbol(pass)) {
        return true;
    }
    return false;
    //  let hasLength = hasCorrectLength(pass);
    //  let hasDigits = hasDigit(hasLength);
    // let hasLCase = hasLowerCase(hasDigits);
    // let hasUCase = hasUpperCase(hasLCase);
    // let hassymbols = hasSymbol(hasUCase);
    // return hassymbols;
}  
console.log(isCorrectPassword('46@aaGG*'))
//console.log(hasSymbol('hd@hfk'));
// console.log(hasUpperCase('fgfa'));
// console.log(hasLowerCase('HGGJG'));
//console.log(hasDigit('djfhd5'));
//console.log(hasCorrectLength('df'));