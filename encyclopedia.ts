import { ReferenceItem }from "./classes"

export default class Encyclopedia extends ReferenceItem {
    
    constructor(
        newTitle:string, 
        newYear: number, 
        public edition:number){

        super(newTitle, newYear);


    }
//to redefine printItem method in the subclass Encyclopedia to do whatever i want; example: want to do everything that ReferenceItem + extra stuff
        printItem():void{
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`)
        };

        printCitation(): void {
            console.log(`${this.title}-${this.year}`)
        }
       
    }