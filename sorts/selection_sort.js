// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let m;
//         for(let j = i + 1; j < arr.length; j++) {

//             if(arr[i] > arr[j]) {
//                 m = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = m;
//             }
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([5,3,1,4,7,6]));

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
function insertion(item) {
    let length = item.length;
    for(let i = 1; i < length; i++) {
      key = item[i];
      let j = i - 1;
      while(j >= 0 && item[j] > key) {
        item[j + 1] = item[j];
        j = j - 1;
      }
      item[j + 1] = key;
    }
    return item;
  }
  console.log(insertion([5,3,1,2,4,6]));