function bubleSorte(arr) {
    let length = arr.length;
    for(let j = 0; j < length; j++) {
      let swap = 0;
      for(let i = 0; i < length - 1; i++) {
          if(arr[i] > arr[i + 1]) {
              a = arr[i];
              b = arr[i + 1]
              arr[i] = b;
              arr[i + 1] = a;
              swap++;
            }
        }
        console.log(swap);
        if(swap === 0) {
          return arr;
        }
    }
}
let arr0 = [2,4,1,3,6,10,7];
console.log(bubleSorte(arr0));