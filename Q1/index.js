"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// a) Celcius to Fahrenheit
let celToFahr = (tempInCel) => console.log(tempInCel * (9 / 5) + 32);
celToFahr(100);
// b) Fahrenheit to Celcius
let fahrToCel = (tempInFahr) => console.log((tempInFahr - 32) * 5 / 9);
fahrToCel(212);
