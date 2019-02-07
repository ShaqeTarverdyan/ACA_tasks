/*Given an array of integers. All numbers are unique. Find the count of missing 
numbers between minimum and maximum elements to make integers sequence.
Use .sort() and .reduce()*/
let arr = [4,9,2,7,3,8];
let fullArr = [];

function sortedArray(arr) {
    return arr.sort();
}
function arrMin(sortedArray) {
    return arr.reduce(function(a,b){
      return  (a < b) ? a : b;
     }); 
}
function arrMax(sortedArray) {
    return arr.reduce(function(a,b){
        return (a > b) ? a : b;
    })
}

for(let i = arrMin(sortedArray); i <= arrMax(sortedArray); i++){
    fullArr.push(i);
}

console.log(fullArr.length - arr.length);
