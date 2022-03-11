"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
const utilityFunctions_1 = require("./lib/utilityFunctions");
const encyclopedia_1 = require("./encyclopedia");
const shelf_1 = require("./shelf");
const _ = require("lodash");
//declaration files lodash
let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);
let reference = new encyclopedia_1.default('Fact Book', 1998, 5);
reference.printCitation();
function getAllBooks() {
    let books = [
        {
            id: 1,
            title: 'Ulysses',
            author: 'James Joyce',
            available: true,
            category: enums_1.Category.Fiction
        },
        {
            id: 2,
            title: 'A Farewell To Arms',
            author: 'Ernest Hemingway',
            available: false,
            category: enums_1.Category.Fiction
        },
        {
            id: 3,
            title: 'I Know Why the Caged Bird Sings',
            author: 'Maya Angelou',
            available: true,
            category: enums_1.Category.Poetry
        },
        {
            id: 4,
            title: 'Moby Dick',
            author: 'Herman Melville',
            available: true,
            category: enums_1.Category.Fiction
        }
    ];
    return books;
}
function logFirstAvailable(books = getAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available === true) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`Fist Book available: ${firstAvailable}`);
}
function getBookTitlesByCategory(categoryFilter = enums_1.Category.Fiction) {
    console.log(`Getting books in category: ${enums_1.Category[categoryFilter]}`);
    const allBooks = getAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        /* console.log(currentBook) */
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function logBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
/* const allBooks= getAllBooks(); */
function getBookById(id) {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function createCustomerID(name, id) {
    return `${id}-${name}`;
}
function createCustomer(name, age, city) {
    console.log(`Creating customer: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
    ;
    if (city) {
        console.log(`City: ${city}`);
    }
}
logFirstAvailable();
function checkoutBooks(customer, ...bookIDs) {
    console.log(`Checking out books for the customer: ${customer}`);
    let booksChekedOut = [];
    for (let id of bookIDs) {
        let book = getBookById(id);
        if (book.available) {
            booksChekedOut.push(book.title);
        }
    }
    return booksChekedOut;
}
function getTitles(author, available) {
    const allBooks = getAllBooks();
    const searchResults = [];
    if (available !== undefined) {
        for (let book of allBooks) {
            if (book.author === author && book.available === true) {
                searchResults.push(book.title);
            }
        }
    }
    else {
        for (let book of allBooks) {
            if (book.author === author) {
                searchResults.push(book.title);
            }
        }
    }
    return searchResults;
}
let myBooks = getTitles('Ernest Hemingway', false);
myBooks.forEach((title) => console.log(title));
function printBook(currentBook) {
    console.log(`${currentBook.title} by ${currentBook.author}`);
}
let myBook = {
    id: 5,
    title: 'Price and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 350,
    markDamaged: (reason) => console.log(`Damaged: ${reason}`)
};
// duck typing in action => the object "myBook" was treated as if had been declared as a Book
printBook(myBook); //Price and Prejudice by Jane Austen
myBook.markDamaged('torn pages');
let logDamage;
logDamage = (damage) => console.log(`Damage reported: ${damage}`);
logDamage('coffee stains');
/* let myBooks: string[]= checkoutBooks('Jesús',1,2,3)
myBooks.forEach(title=>console.log(title)) */
/* let michelle= createCustomer('Michelle',53,'London');
console.log(michelle);

let poetryBooks= getBookTitlesByCategory(Category.Poetry);
poetryBooks.forEach((title)=>console.log("title poetry", title));

let fictionsBooks= getBookTitlesByCategory();
fictionsBooks.forEach((title)=>console.log("title fiction",title)) */
/* let x:number;
x=5;
*/
let IdGenerator;
IdGenerator = createCustomerID;
;
let myId = IdGenerator('Jesús', 50);
console.log(myId);
let favoriteLibrarian = new classes_1.UniversityLibrarian();
favoriteLibrarian.name = 'Martha';
favoriteLibrarian.email = 'marthagp@gmail.com';
favoriteLibrarian.department = 'science';
favoriteLibrarian.assistCustomer('Mike');
// creating and using classes
//abstract classes cannot be instantiated: only create instances of their subclasses
//let ref: ReferenceItem= new ReferenceItem('Updated Facts and Figure', 2025);//Error:Cannot create an instance of an abstract class.
let refBook = new encyclopedia_1.default('WorldPedia', 1911, 8);
/* ref.title= 'Facts and Figure';
ref.year= 2022; */
/* ref.printItem();
ref.publisher= 'Random Data Publishing';
console.log(ref.publisher); */
//extending classes with inherit
refBook.printCitation();
//class expressions
let Newspaper = class extends classes_1.ReferenceItem {
    printCitation() {
        console.log(`Newspaper: ${this.title}`);
    }
};
let myPaper = new Newspaper('El Diario', 1989);
myPaper.printCitation();
class Novel extends class {
} {
}
let favoriteNovel = new Novel();
favoriteNovel.mainCharacter;
//******** GENERICS **********/
let inventory = [
    {
        id: 11,
        title: 'The C Programming Languague',
        author: 'K & R',
        available: true,
        category: enums_1.Category.Fiction
    },
    {
        id: 12,
        title: 'Code Complete',
        author: 'Steve McConnell',
        available: false,
        category: enums_1.Category.Fiction
    },
    {
        id: 13,
        title: 'Introduction JavaScript',
        author: 'J.C',
        available: true,
        category: enums_1.Category.Poetry
    },
    {
        id: 14,
        title: 'Introduction Java',
        author: 'Herman McGuire',
        available: true,
        category: enums_1.Category.Fiction
    }
];
let purgedBooks = (0, utilityFunctions_1.Purge)(inventory);
purgedBooks.forEach((book) => console.log(book.title)); // Introduction JavaScript Introduction Java
//similar function
let purgedNums = (0, utilityFunctions_1.Purge)([1, 2, 3, 4]);
console.log(purgedNums); //[ 3, 4 ]
// generic classes
let bookShelf = new shelf_1.default();
inventory.forEach(book => bookShelf.add(book));
/* console.log(inventory) */
let firstBook = bookShelf.getFirst();
/* console.log(firstBook) */
let magazines = [
    {
        title: 'Programming Language Monthly',
        publisher: 'Code Mags'
    },
    {
        title: 'Literary Fiction Quarterly',
        publisher: 'College Press'
    },
    {
        title: 'Five Points',
        publisher: 'GSU'
    }
];
let magazineShelf = new shelf_1.default();
magazines.forEach(magazine => magazineShelf.add(magazine));
let firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine);
magazineShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title}- (${softwareBook.author})`);
/* let numberShelf: Shelf<number> =new Shelf<number>();
[1,2,3,4,5,6].forEach(n=>numberShelf.add(n));
console.log(numberShelf) */
/* const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);
const fictionBooks = getBookTitlesByCategory(Category.Fiction);
logBookTitles(fictionBooks);
fictionBooks.forEach((val,idx,arr)=> console.log(`${++idx}-${val}`)) */
/* logFirstAvailable(allBooks);
console.log(allBooks) */
//# sourceMappingURL=app.js.map