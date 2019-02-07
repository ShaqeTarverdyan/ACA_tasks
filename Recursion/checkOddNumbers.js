/*Write a recursive function to determine whether all digits of the number are odd or not.*/
//4211133
//7791
//5

function checkOddDigits(numb) {
     if(numb){
        console.log((numb % 10) % 2 != 0);
     }
     return checkOddDigits(Math.floor(numb / 10));
}

console.log(checkOddDigits(7791));