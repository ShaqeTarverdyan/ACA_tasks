/*Implement the classic method for composing secret messages called a square code. Given an English 
text, output the encoded version of that text.
First, the input is normalized: the spaces and punctuation are removed from the English text and the message is downcased. 
Then, the normalized characters are broken into rows. The plain text should be organized into a rectangle.
 The size of the rectangle (r x c) should be decided by the length of the message,
  such that c >= r and c - r <= 1, where c is the number of columns and r is the number of rows. 
  The coded message is obtained by reading down the columns going left to right.

Plain: If man was meant to stay on the ground, god would have given us roots.
Ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots

Cipher:
ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots*/
//1.remove all spaces & punctuations from text+
let str = 'If man. was!!@#$% meant to stay on the ground, god would have given us roots.'
let punctuationless = str.replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"");
let newStr = punctuationless.replace(/\s{2,}/g," ");
function removeWhiteSpacec(message) {
    let newMessage = newStr.split(' ').join('');
    return newMessage;
}

let str2 = (removeWhiteSpacec(str));
let newArr = [];
let wordSize = 8;
while(str2) {
    if(str2.length < wordSize) {
        newArr.push(str2);
        break;
    } else {
        newArr.push(str2.substr(0, wordSize));
        str2 = str2.substr(wordSize);
    }
}

console.log(newArr);




