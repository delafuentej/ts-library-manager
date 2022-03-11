"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
class Encyclopedia extends classes_1.ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    //to redefine printItem method in the subclass Encyclopedia to do whatever i want; example: want to do everything that ReferenceItem + extra stuff
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    ;
    printCitation() {
        console.log(`${this.title}-${this.year}`);
    }
}
exports.default = Encyclopedia;
//# sourceMappingURL=encyclopedia.js.map