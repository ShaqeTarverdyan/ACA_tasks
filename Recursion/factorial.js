/*Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!*/
function factorial(n) {
    if(n ===1) {
        return 1;
    }
    return  n * factorial (n - 1);
} 
console.log(factorial(5));

//variant 2 

function fact(k) {
    return k ? k * fact(k - 1) : 1;
}
console.log(fact(5))


