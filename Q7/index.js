"use strict";
// Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let factorChecker = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return console.log(`${num} is divisible by 3 & 5`);
    }
    else if (num % 3 === 0) {
        return console.log(`${num} is divisible by 3 but not 5`);
    }
    else if (num % 5 === 0) {
        return console.log(`${num} is divisible by 5 but not 3`);
    }
};
factorChecker(10);
