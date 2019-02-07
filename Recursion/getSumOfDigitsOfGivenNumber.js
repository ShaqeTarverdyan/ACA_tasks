/*Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. 
Repeat that process if needed and return the result.*/

//14 =>5
//29=>2
//999999999999 =>9
                            // function getSumOfDigits(num) {
                            //     let arr = [];
                            //     let sum = 0;
                            //     let index = 0;
                            //     for(let i = 0; i < num.length; i++) {
                            //         arr.push(num[i]);
                            //     }
                            //     for(let j = 0; j < arr.length; j++) {
                            //         sum += Number(arr[j]);
                            //         index++;
                            //     }
                            //     if(sum <= 9) {
                            //         return(sum); 
                            //     } else {
                            //         return index;
                            //     }  
                            // }
                            // console.log(getSumOfDigits('5596668777'));
/*Նայի, եթե օրինակ տված ա 1247 թիվը։ Եթե նիշերը գումարես, կստանաս 14, որը մեծ ա 9-ից, հետևաբար իրա 
նիշերն էլ պետք ա իրար գումարես (1 + 4 = 5)․ ու տենց էդքան , մինչև չստանաս միանիշ թիվ*/ 
/*ախ արի առանց while գրենք, ռեկուրսիայով միայն։ Նայի, ունես num և sum, առաջինի նիշերը հերթով 
գումարում ես մյուսին, num-ը վերջացավ, ստացա՞նք իրա նիշերի գումարը չէ sum-ի մեջ։ Հիմա եթե sum-ը 
10-ից փոքր ա, կարանք իրան միանգամից վերադարձնենք, իսկ հակառակ դեպքում արդեն կանչենք իրա վրա եր
 ֆունկցիան (ուշադիր եղի, արդեն sum-ի վրա, ոչ թե num-ի)։*/ 
function getNumbersSum(num, sum = 0, newSum = 0) {
 
    while(num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    if(sum <= 9) {
        return sum;
    } else {
        return getNumbersSum(sum);
    }
}
console.log(getNumbersSum('9999999999'));



