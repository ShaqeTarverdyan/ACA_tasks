function insertion(item) {
    let length = item.length;
    for(let i = 1; i < length; i++) {
      for(let j = i; j > 0; j--) {
        if(item[j] < item[j-1]) {
          item[j] += item[j-1];
          item[j-1] = item[j] - item[j-1];
          item[j] -= item[j-1];
        } else {
          break;
        }
      }
    }
    
    return item;
  }
  let arr = [5,4,3,2,1,6];
  console.log(insertion(arr));