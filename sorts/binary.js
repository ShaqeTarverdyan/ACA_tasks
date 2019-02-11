function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== value && start < end) {
        if(arr[middle] > value) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return (arr[middle] !== value) ? -1 : middle
}
const arr = [1,7,8,9,12,15,17,22,23];
console.log(binarySearch(arr, 5));