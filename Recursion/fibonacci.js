//variant1
function getFibonachi(n) {
     if(n === 1 || n === 2) {
         return 1;
     }
         return getFibonachi(n - 1) + getFibonachi(n - 2);
 }
 console.log(getFibonachi(21));


 //variant2
 function fibonacci(n) {
     return (n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
 }
 console.log(fibonacci(4));

 //online variant

 function fibonacci(m) {
    return (m < 2) ? 1 : fibonacci(m - 1) + fibonacci(m - 2);
}
console.log(fibonacci(1));