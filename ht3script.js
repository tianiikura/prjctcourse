"use strict";

/* task 1 */
let inputValue = Number(prompt("Enter the integer number", ""));
if (isNaN(inputValue)) {
    console.log("Помилка: введіть число");
}
else {
    for( let i  = 0; i < inputValue; i += 2 ) {
        console.log(i);
    }
} //

/* task 2 */
const currentMaxValue = 4589;
let reverseMaxValue;
reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));
console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); //

/* task 3 */
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity); // [1, 2, 3, 4]
let result = 1;
for (let i=0; i<productOfArray.length; i++){
    result *= productOfArray[i];
}
console.log(result); // 24