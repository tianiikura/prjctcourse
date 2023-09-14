"use strict";

//task 1 
/* function iterativeOddSumTo(number) {
    let sum = 0;
    for( let i  = 1; i <= number; i += 2 ) {
        sum += i;
    }

    return sum;
};
    
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25 */

//task 2
function recursiveOddSumTo(number) {
    if (number === 1) {
        return number;
    }
    
    if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    }

    return number + recursiveOddSumTo(number - 2);
};
    
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(9)) // 25
    console.log(recursiveOddSumTo(10)) // 25