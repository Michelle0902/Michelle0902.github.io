//1
// a
const computeSumOfSquares = (arr) =>
    arr.map(x => x ** 2).reduce((sum, square) => sum + square, 0);
  
console.log(computeSumOfSquares([1, 2, 3])); 

//b 
const printOddNumbersOnly = (arr) => 
    arr.filter(x => x%2!==0).forEach(x => console.log(x));

printOddNumbersOnly([1,3,4,5,6,7])

//c
const printFibo = (n, a, b) => 
    Array.from({ length: n }).reduce((acc, _, i) => {
      if (i === 0) return [a];
      if (i === 1) return [...acc, b];
      return [...acc, acc[i - 1] + acc[i - 2]];
    }, []);
  
console.log("1C: ", printFibo(6,0,1));

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

// 4. -> in data.js and script.js files