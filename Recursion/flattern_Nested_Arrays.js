/*Given an array of nested arrays. Write a recursive function that flattens it. 
(Hint create function that concats arrays).*/ 
function flattenArray(array, newArray = []) {
    let { length } = array; // let length = array.length
    for(let i = 0; i <  length; i++) {
        if(Array.isArray(array[i])) {
            newArray.push(...flattenArray(array[i]));
        } else {
             newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(flattenArray([1,2,[3,4],[[5],[6,[7,8]]]]));