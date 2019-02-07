/*Given an array of numbers. Write a recursive function to find its minimal positive
 element. (if such element does not exist, return -1)․*/
 //[56, -9, 87, -23, 0, -105, 55, 1] 0
 //[45, -9, 15, 5, -78] 5
 //[-5, -9, -111, -1000, -7]

 function getPossitiveNumber(arr,minimal = arr[0]) {
       if(arr.length === 0 ) {
            if(minimal < 0 || minimal == undefined){
                return -1;
            }
              return minimal;
       } else {
              let first = arr.shift();
              if(first >= 0 && minimal >= first) {
                    minimal = first;
              }
              return getPossitiveNumber(arr,minimal);
       }
     }
    console.log(getPossitiveNumber([1, 5, -9, -111, -1000, -7]));
//  function getPoss(arr) {
//         posit = [];
//         for(let i = 0; i < arr.length; i++) {
//                if(arr[i] >= 0) {
//                       posit = arr[i];
//                } else {
//                       posit = -1;
//                }
//         }
//         return posit;
//  }
//  console.log(getPoss([56, -9, 87, -23, 0, -105, 55, 1]));