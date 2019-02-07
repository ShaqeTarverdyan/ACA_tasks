//variant 1
function factorial1(n) {
    let product = 1;
    while(n > 1) {
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial1(5));
//variant 2
 function factorial2(m) {
     let i;
     let product = 1;
     for(i = 2; i <= m; i++) {
         product *= i;
     }
     return product;
 }
 console.log(factorial2(4));

