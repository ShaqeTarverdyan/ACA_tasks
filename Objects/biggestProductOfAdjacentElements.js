/*Given an array of integers, find the pair of adjacent
 elements that has the largest product and return that product.
Use .map(), .reduce()*/
 
 //[1,2,3,4] => 12
function getAdjacentElementsProduct(arr) {
    let x = 0;
    let y = 0; 
    let p = 0;
    for(let i = 0; i < arr.length; i++) {
        x = arr[i];
        y = arr[i + 1];
        if(x * y > p) {
            p = x * y;
        }
    }
    return p;
}
let  arr = [1,2,3,4];
console.log(getAdjacentElementsProduct(arr))


//method variant
// function adjacentElementProduct(arr) {
//     return Math.max(...arr.slice(0,-1).map((n,i) => n * arr[i + 1]));
// }
// console.log(adjacentElementProduct([1,2,3,4]));