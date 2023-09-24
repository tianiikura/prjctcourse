"use strict";

/* task 1 */
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {// тут пишете свій код
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
} */

/*task 2 */
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	return function (b) {
        return a * b;
    }
}