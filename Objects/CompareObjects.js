/*Given two objects. Write a function that performs shallow compare.*/
/*var a = { a: ‘1’ };
var b = { a: ‘1’};
shallowCompare(a, b)
*/ 
//Object.keys
let firstObj = {
    a:'1',
    c:'2',
};
let secObj = {
    a:'1',
    b:'2',
}
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
console.log(compareObjects(firstObj,secObj));