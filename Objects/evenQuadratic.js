/*Given an array of numbers. Find the sum of numbers’ quadratic which are even.*/
/*Տրված է զանգված։Գտնել այն թվերի գումարը, որոնց քառակուսին զույգ է */

function checkNumbersWichQuadraticIsEven(arr) {
    let length = arr.length;
    let even = [];
    for(let i = 0; i < length; i++) {
        if((arr[i] * arr[i]) % 2 === 0) {
            even.push(arr[i]);  
        }
        
    }
    return even;
}


function getSum(arr) {
    let evenNumbers = checkNumbersWichQuadraticIsEven(arr);
    let length = evenNumbers.length;
    let sum = 0;
    for(let i = 0; i < length; i++) {
        sum += evenNumbers[i];
    }
    return sum;
}
console.log(getSum([1,2,3,4,5,6,7,8,9,11,12]))
console.log(checkNumbersWichQuadraticIsEven([1,2,3,4,5,6,7,8,9,11,12]));

//variant 2
// let arr = [1,2,3,4,5,6,7,8];
// function evenNumbers(arr) {
//     return arr % 2 === 0;  
// }
// function mapEvenNumbers(arr) {
//     return arr * arr;
// }
// function sumOfQuadratics(value) {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//      return arr.filter(evenNumbers).map(mapEvenNumbers).reduce(reducer);
// }

// console.log(sumOfQuadratics(arr));