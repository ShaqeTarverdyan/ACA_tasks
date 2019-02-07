/*Given a word and a list of possible anagrams, select the correct sublist.
“listen”, ["enlists" "google" "inlets" "banana"] => [“inlets”]*/


 function isAnagram(arr, word) {
     word = word.split('').sort().join('');
     let arr2 = [];
     let anagram = [];
        for(let i = 0; i < arr.length; i++) {
           if( arr[i].split('').sort().join('') === word) {
                anagram.push(arr[i]);
           }
        }
      return anagram;
 }
let arr = ["enlists", "google", "inlets", "banana"];
let arr2 = ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'];
console.log(isAnagram(arr2,'pencil'));