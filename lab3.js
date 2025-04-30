// a
const computeSumOfSquares = (arr) =>
    arr.map(x => x ** 2).reduce((sum, square) => sum + square, 0);
  
console.log(computeSumOfSquares([1, 2, 3])); 

//b 
const printOddNumbersOnly = (arr) => 
    arr.filter(x => x%2!==0).forEach(x => console.log(x));

printOddNumbersOnly([1,3,4,5,6,7])

//c
const printFibo = (n, a, b) => {
    const items = [];
    if(n>=1){items.push(a)};
    if(n>=2){items.push(b)};
    while(items.length<n){
        items.push(items[items.length-1]+items[items.length-2]);
    }
    return items;
}
console.log(printFibo(6,0,1));

// 2. Destructuring assignment:
let user = { name: "John", years: 30 };

const { name, years: age, isAdmin = false } = user;

console.log(name);     
console.log(age);      
console.log(isAdmin);  

// 3.
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
    ];
   
const addBook = (title, author, ID) => {
    let book = {title, author, ID};
    libraryBooks.push(book);
}

addBook("The art of not giving a Fuck", "abcd", 1234);
addBook("The art", "abud", 1238);

const getTitles = (libraryBooks) => {
    return [...libraryBooks].sort((a, b)=>a.title.localeCompare(b.title)).map(book => book.title);
}

console.log(getTitles(libraryBooks));

const findBooks = (keyword) => {
    return libraryBooks
      .filter(book =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
      )
      .sort((a, b) => a.ID - b.ID)
      .map(book => book.title);
  };
  

console.log(findBooks("art"));

// 4. Implement following functions in data.js and test those in script.js:
// // data.js
// let data = [];
// export function get_items() {
// return data;
// }
// export function add_item(new_item) {
// // add item (if id does not exist)
// // return true if item is added successfully, false otherwise
// }
// export function update_item_title_by_id(id, new_title) {
// // update the title (if id exist)
// // return true if item is update successfully, false otherwise
// }
// export function delete_item_by_id(id) {
// // delete the item (if id exist)
// // return true if item is deleted successfully, false otherwise
// }
// export function get_item_title_by_id(id) {
// // return the item title by id (if id exist)
// }
