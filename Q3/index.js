"use strict";
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let daysToWeeks = (days) => {
    console.log(`${days} days = ${Math.floor(days / 7)} weeks and ${days % 7} days`);
};
daysToWeeks(13);
