/*Given a number and an array. Find the second occurrence of the number in the array. 
Consider that the occurrence of each element in the array is at least two.*/
//5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6] //6

function getSecondNumber(arr, num, count = 0,  index = 0) {
    if(arr[index] === num) {
        if(count === 1) {
            return index;
        }
            return getSecondNumber(arr, num, count+1,  index+1);
    }
    return getSecondNumber(arr, num, count,  index+1);
}
console.log(getSecondNumber([0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6],5))


// variant2
function getSecondNumber(arr, num, count = 0,  index = 0) {
    if(arr[index] === num) {
        count++;
    }
    if(count === 2){
        return index;
    }
    return getSecondNumber(arr, num, count,  index + 1);
}
console.log(getSecondNumber([0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6],5));