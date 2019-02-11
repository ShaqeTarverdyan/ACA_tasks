function linearSearch(arr,value) {
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        if(arr[i] == value) {
            return i;
        }
    }
    return -1;
}
const arr = [1,5,7,3,6,12,54,78,32,8];
console.log(linearSearch(arr, 54));