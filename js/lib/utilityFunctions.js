"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    return 10;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
//generic functions
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunctions.js.map