import { Category } from "./enums";
import { Book , Logger, Librarian, Author, Magazine} from "./interfaces";
import { UniversityLibrarian, ReferenceItem} from './classes';
import{CalculateLateFee as CalcFee, MaxBooksAllowed, Purge} from "./lib/utilityFunctions";
import referBook from "./encyclopedia";
import Shelf from './shelf';
import * as _ from "lodash";

//declaration files lodash
let snakeCaseTitle:string= _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);


let reference= new referBook('Fact Book',1998,5)
reference.printCitation()

function getAllBooks(): Book[]{
    let books=[
        {
            id:1,
            title:'Ulysses', 
            author:'James Joyce',
            available:true,
            category: Category.Fiction
        },
        {
            id:2,
            title:'A Farewell To Arms', 
            author:'Ernest Hemingway',
            available:false,
            category:Category.Fiction
        }
        ,
        {
            id:3,
            title:'I Know Why the Caged Bird Sings', 
            author:'Maya Angelou',
            available:true,
            category: Category.Poetry
        }
        ,
        {
            id:4,
            title:'Moby Dick',
            author:'Herman Melville',
            available:true,
            category:Category.Fiction
        }
        

    ];
    return books;
}

 function logFirstAvailable(books= getAllBooks()){
    let numberOfBooks: number= books.length;
    let firstAvailable: string = '';
    for(let currentBook of books){
        
        if(currentBook.available === true){
            firstAvailable = currentBook.title;
            break;
            
        }
    }
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`Fist Book available: ${firstAvailable}`)
} 
function getBookTitlesByCategory( categoryFilter: Category = Category.Fiction): Array<string>{
    console.log(`Getting books in category: ${Category[categoryFilter]}`);
    const allBooks= getAllBooks();
    const filteredTitles: string[]=[];

    for(let currentBook of allBooks){
        /* console.log(currentBook) */
         if( currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title)
        } 
    }
    return filteredTitles;
}

function logBookTitles(titles: string[]): void{
    for(let title of titles){
        console.log(title);
    }
}


/* const allBooks= getAllBooks(); */

function getBookById(id:number):Book{
    const allBooks=getAllBooks();
    return allBooks.filter(book=> book.id === id )[0];
}

function createCustomerID( name:string, id:number):string{
    return `${id}-${name}`
}

function createCustomer( name:string, age?: number, city?:string):void{
    console.log(`Creating customer: ${name}`);

    if(age){
        console.log(`Age: ${age}`)
    };
    if(city){
        console.log(`City: ${city}`)
    }

}  

logFirstAvailable();

function checkoutBooks( customer: string, ...bookIDs: number[]):string[]{
    console.log(`Checking out books for the customer: ${customer}`);

    let booksChekedOut: string[]=[];

    for(let id of bookIDs){
        let book =getBookById(id);
        if(book.available){
            booksChekedOut.push(book.title)
        }
    }
    return booksChekedOut;
}

//implementing function overloads
function getTitles(author: string):string[];
function getTitles(author:string, available:boolean):string[];
function getTitles(author:string, available?:boolean):string[]{
    const allBooks= getAllBooks();
    const searchResults: string[]=[];
    if(available !==undefined){
        for(let book of allBooks){
            if(book.author === author && book.available === true){
                searchResults.push(book.title);

            }
           
        }

    }
    else{
        for(let book of allBooks){
            if(book.author === author){
                searchResults.push(book.title)
            }
        }

    }
    return searchResults;

}

let myBooks:string[] = getTitles('Ernest Hemingway',false);
myBooks.forEach((title)=>console.log(title));

function printBook(currentBook: Book):void{
    console.log(`${currentBook.title} by ${currentBook.author}`)
}

let myBook: Book = {
    id:5,
    title:'Price and Prejudice',
    author:'Jane Austen',
    available:true,
    category:Category.Fiction,
    pages:350,
    markDamaged:(reason:string)=>console.log(`Damaged: ${reason}`)
   
}
// duck typing in action => the object "myBook" was treated as if had been declared as a Book
printBook(myBook);//Price and Prejudice by Jane Austen
myBook.markDamaged('torn pages');

let logDamage:Logger;
logDamage=(damage:string)=>console.log(`Damage reported: ${damage}`);
logDamage('coffee stains')
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
let IdGenerator:StringGenerator;
IdGenerator=createCustomerID;

interface StringGenerator{
    (chars:string, nums:number):string;
};
let myId: string= IdGenerator('Jesús',50);
console.log(myId) 


let favoriteLibrarian: Librarian =new UniversityLibrarian();
favoriteLibrarian.name='Martha';
favoriteLibrarian.email='marthagp@gmail.com'
favoriteLibrarian.department='science'
favoriteLibrarian.assistCustomer('Mike');
// creating and using classes
//abstract classes cannot be instantiated: only create instances of their subclasses

//let ref: ReferenceItem= new ReferenceItem('Updated Facts and Figure', 2025);//Error:Cannot create an instance of an abstract class.
 let refBook:ReferenceItem= new referBook('WorldPedia',1911,8) 

/* ref.title= 'Facts and Figure';
ref.year= 2022; */
/* ref.printItem();
ref.publisher= 'Random Data Publishing';
console.log(ref.publisher); */

//extending classes with inherit


refBook.printCitation();


//class expressions
let Newspaper= class extends ReferenceItem{
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`)
    }
}

let myPaper= new Newspaper('El Diario', 1989)
myPaper.printCitation()


class Novel extends class {title:string}{
    mainCharacter:string;
}

let favoriteNovel= new Novel();
favoriteNovel.mainCharacter


//******** GENERICS **********/


let inventory: Array<Book>=[
    {
        id:11,
        title:'The C Programming Languague', 
        author:'K & R',
        available:true,
        category: Category.Fiction
    },
    {
        id:12,
        title:'Code Complete', 
        author:'Steve McConnell',
        available:false,
        category:Category.Fiction
    }
    ,
    {
        id:13,
        title:'Introduction JavaScript', 
        author:'J.C',
        available:true,
        category: Category.Poetry
    }
    ,
    {
        id:14,
        title:'Introduction Java',
        author:'Herman McGuire',
        available:true,
        category:Category.Fiction
    }
];
let purgedBooks:Array<Book> = Purge<Book>(inventory);
purgedBooks.forEach((book)=>console.log(book.title));// Introduction JavaScript Introduction Java

//similar function

let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
console.log(purgedNums);//[ 3, 4 ]

// generic classes

let bookShelf: Shelf<Book>= new Shelf<Book>();
inventory.forEach(book=> bookShelf.add(book));
/* console.log(inventory) */

let firstBook: Book= bookShelf.getFirst();
/* console.log(firstBook) */

let magazines:Array<Magazine>=[
    {
        title:'Programming Language Monthly', 
        publisher:'Code Mags'
    },

    {
        title:'Literary Fiction Quarterly', 
        publisher:'College Press'
    },

    {
        title:'Five Points', 
        publisher:'GSU'
    }
]

let magazineShelf:Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine=>magazineShelf.add(magazine));
let firstMagazine: Magazine= magazineShelf.getFirst();
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
