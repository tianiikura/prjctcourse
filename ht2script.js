"use strict";
/* task 1 */
let passwordSymbols = prompt("Enter your password", "");
console.log (passwordSymbols.length >= 8 && passwordSymbols[0] === !isNaN(passwordSymbols[0]));
/* */

/* task 2 * /
let uah = prompt("Please enter your UAH amount", "1");
const usd = 36.84;

let convertToUsd = uah * usd;
console.log(convertToUsd);
/* */

/* task 3 * /
let litersOfFuel = prompt("Enter amont of fuel", "");
let priceForFuel = prompt("Enter price of fuel", "");
let sumForFuel = Math.round(litersOfFuel*priceForFuel *100)/100;
//let sumForFuel = litersOfFuel*priceForFuel.toFixed(2);
alert(sumForFuel);

/* */