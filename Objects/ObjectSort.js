/*Given the list of the following readers:
[
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.*/
let books = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

function filterReadBooks(books){
    let filteredBooks= [];
    for(let i = 0; i < books.length; i++) {
      if(books[i].readStatus) {
        filteredBooks.push(books[i])
      }
      }
      return filteredBooks;
    }


//console.log(filterReadBooks(books));
function sortBookByPercent(filteredBooks) {
    let length = filteredBooks.length;
    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            if(filteredBooks[i].percent < filteredBooks[j].percent) {
                let temp = filteredBooks[i];
                filteredBooks[i] = filteredBooks[j];
                filteredBooks[j] = temp;
            }
        }
    }
    return filteredBooks;
}
console.log(sortBookByPercent(filterReadBooks(books)));