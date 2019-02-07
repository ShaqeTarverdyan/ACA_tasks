/*Given an array. Write a recursive function that removes the first element 
and returns the given array. (without using arr.unshift())*/
//[6, 78, ‘n’, 0, 1]  =>  [78, ‘n’, 0, 1]
//[5] => []
//[] => []
function substructFirstElement(arr, i=1, newArr = [] ) {
    if(arr.length === 0 || arr.length === 1) {
        return newArr;
    } else {
        newArr.push(arr[i]);
    }
    if(newArr.length === arr.length - 1) {
            return newArr;
     }
         return substructFirstElement(arr, i+1, newArr);
}
console.log(substructFirstElement([6, 78, 'n', 0, 1]));
