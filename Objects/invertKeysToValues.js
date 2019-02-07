/*Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
*/

//{ a: ‘1’, b: ‘2’ }  =>{ 1: ‘a’, 2: ‘b’ }
//{ a: ‘1’, b: ‘2’, c: ‘2’  }  =>{ 1: ‘a’, 2: [‘b’, ‘c’] }
                // let arrObj = {
                //     a : 1,
                //     b : 2,
                //     c: 2,
                //     d: 2,
                //     e:2,
                // };

                // function invertObjectValues(prevObj) {
                //     const newObj = {};

                //     for(let prevKey in prevObj) {
                //         let newKey = prevObj[prevKey];
                //         if(newObj[newKey] !== undefined) {
                //             if(Array.isArray(newObj[newKey])) {
                //                 newObj[newKey].push(prevKey);
                //             } else {
                //                 newObj[newKey] = [newObj[newKey], prevKey];
                //             }
                //         } else {
                //             newObj[newKey] = prevKey;
                //         }
                //     }
                
                //     return newObj;
                // }
                // console.log(invertObjectValues(arrObj));


    let arrObj = {
        a : 1,
        b : 2,
        c : 2,
        d : 2,
        e : 5,
    };

function invertObjectValues(prevObj) {
    const newObj = {};
    for(let prevKey in prevObj) {
        let newKey = prevObj[prevKey];
     //  console.log(newObj)
        if(newObj[newKey] !== undefined) {
            if(Array.isArray(newObj[newKey])) {
                newObj[newKey].push(prevKey);
            } else {
                newObj[newKey] = [newObj[newKey], prevKey]
            }
        } else {
            newObj[newKey] = prevKey;
        }
    }
    return newObj;
}

console.log(invertObjectValues(arrObj))
