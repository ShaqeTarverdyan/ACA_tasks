/*Given an array of numbers which is almost sorted in ascending order. 
 Find the index where sorting order is violated.*/
 //[2, 12, 15, 48, 64] =>-1
 //[-9, -4, -4, 3, 12, 4, 5] => 5


//  function getViolatedOrder(arr) {
//     let length = arr.length;
//     let counter = -1;
//     for(let i = 0; i < length; i++) {
//         if(arr[i] > arr[i + 1]) {
//             counter += (i + 2);
//             break;
//         } else {
//             if(arr[i] <= arr[i + 1]) {
//                // continue;
//                  counter;
//             }
//         }  
//     } 
//     return counter;
// }
// console.log(getViolatedOrder([3, 12, 15, 98,48, 64]));

function getViolatedOrder(arr, index = 0) {
    if(arr[index] > arr[index + 1]) {
        return index;
    }
    if(index === arr.length - 1) {
        return -1;
    }
    return getViolatedOrder(arr, index+1);
}
console.log(getViolatedOrder([3, 12, 15, 4, 64]));