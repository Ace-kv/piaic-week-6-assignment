"use strict";
// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax 
// if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
let unitChecker = (units, pricePerUnit) => {
    if (units > 100 && units <= 200) {
        return console.log(`Based on the consumption of ${units} units, your bill totalled $${units * pricePerUnit} is eligible for a
10% tax which is an amount of $${0.10 * (units * pricePerUnit)}`);
    }
    else if (units > 200 && units <= 500) {
        return console.log(`Based on the consumption of ${units} units, your bill totalled $${units * pricePerUnit} is eligible for a
15% tax which is an amount of $${0.15 * (units * pricePerUnit)}`);
    }
    else if (units > 500) {
        return console.log(`Based on the consumption of ${units} units, your bill totalled $${units * pricePerUnit} is eligible for a
25% tax which is an amount of $${0.25 * (units * pricePerUnit)}`);
    }
};
unitChecker(501, 11);
