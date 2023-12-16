"use strict";
// Write a program that checks if the given year is leap year or not.
let leapYearChecker = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return console.log(`The year ${year} is a leap year`);
            }
            return console.log(`The year ${year} is not a leap year`);
        }
        return console.log(`The year ${year} is a leap year`);
    }
    return console.log(`The year ${year} is not a leap year`);
};
leapYearChecker(2000);
