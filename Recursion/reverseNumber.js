/*Given a number. Write a recursive function that reverse the number. Return the new number.*/
//variant 1
function getReverse(numb) {
    if(numb < 10) {
        return numb;
    }
    return (numb % 10) + '' +  getReverse(Math.floor(numb / 10));
}
console.log(getReverse(100));

//variant2
function reverse(number) {
    return number < 10 ? number : number % 10 + reverse(Math.floor(number / 10)).toString();

}
console.log(reverse(258));