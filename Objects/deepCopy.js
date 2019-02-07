/*Given an object. Write a function that creates a deep copy of it.*/
/*var a = { a: ‘1’, b: { a: 2} };
var b = deepCopy(a);

a.b.a = 123;
console.log(b.b.a !== 123);
*/ 

function deepCopy(obj) {
   let newObj = {};
   for(let key in obj) {
       if(typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
       } else {
            newObj[key] = obj[key];
       }
   }
   return newObj;
}
let a = {
    x: {
        y :5
    }
};

let b = deepCopy(a);
console.log(b.x.y, a.x.y)
b.x.y = 6;
console.log(b.x.y, a.x.y)

