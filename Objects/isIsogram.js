/*Determine if a word or phrase is an isogram. An isogram 
(also known as a "non pattern word") is a word or phrase without a repeating letter.*/
        // function removeWhiteSpaces(value) {
        //     let newValue = value.split(' ').join('');
        //     return newValue;
        // }

        // function changeStringToArray(value) {
        //     let withoutWhiteSpaces = removeWhiteSpaces(value);
        //     let arrValue = [];
        //     for(let i = 0; i < withoutWhiteSpaces.length; i++) {
        //         arrValue.push(withoutWhiteSpaces[i]);
        //     }
        //    return arrValue;
        // }

        // function sortArrayMembers(value) {
        //     let arr = changeStringToArray(value);
        //     let sortedArr = arr.sort();
        //     return sortedArr;
        // }


        // function isIsogram(value) {
        //     let checkIsogram = sortArrayMembers(value);
        //     let length = checkIsogram.length;
        //     for(let i = 0; i < length; i++) {
        //         for(let j = i + 1; j < length; j++) {
        //             if(checkIsogram[i] === checkIsogram[j]) {
        //                 return false;
        //             }
        //         }   
        //         return true;
        //     }
        // }
        // console.log(isIsogram(' javascript'))

        function isIsogram(string) {
            const array = string.split('');
            return !array.some((element, index) => array.indexOf(element, index + 1) > -1);
        }

        console.log(isIsogram('amamkm'))