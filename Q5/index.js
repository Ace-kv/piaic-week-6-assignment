"use strict";
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." 
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let ageInterpretor = (age) => {
    if (age >= 0 && age <= 12) {
        return console.log("You are a Child");
    }
    else if (age >= 13 && age <= 19) {
        return console.log("You are a Teenager");
    }
    return console.log("You are an Adult");
};
ageInterpretor(20);
