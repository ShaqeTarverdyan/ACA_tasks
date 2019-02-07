function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
console.log(mergeSort([9,7,3,5,4,2]));


function merge(right,left) {
    let rightIndex = 0, leftIndex = 0;
    let result = [];
    while(rightIndex < right.length && leftIndex < left.length) {
        if(right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    return result.concat(right.slice(rightIndex,right.length))
                 .concat(left.slice(leftIndex, left.length));
}
// console.log(merge([1,3,5,7],[2,4,6,8]))