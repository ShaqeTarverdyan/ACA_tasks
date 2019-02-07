/*Given an array. Write a recursive function that returns the sum of it. (Hint: arr.pop())*/
//variant 1
function getSumOfArrayMembers(arr) {
   if(arr.length === 0) {
       return 0;
   } 
   return (arr.pop() + getSumOfArrayMembers(arr));
}
console.log(getSumOfArrayMembers([1,10,12,3]));

//variant2
function sum(arr) {
    return arr.length === 0 ? 0 : arr.pop() + sum(arr);
}
console.log(sum([1,5,3,7]));