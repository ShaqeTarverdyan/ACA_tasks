/*Given an array. Determine whether it consists only from uniques or not.*/
function compareObjects(obj1, obj2) {
    if(Object.keys(obj1).length == Object.keys(obj2).length) {
        for(let key in obj1) {
            if(obj1[key] !== obj2[key]) {
                return false;
            } 
        } 
        return true; 
    }
    return false;
}



function areElementsUnique(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            if(typeof arr[i] === 'object' && typeof arr[j] === 'object') {
                if(compareObjects(arr[i],arr[j])) {
                    return false;
                }
            } else {
                if(arr[i] === arr[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(areElementsUnique([1,3,4,5]));

