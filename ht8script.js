"use strict";

/* task 1 */
function detonatorTimer(delay) {
    let i = delay;

    let intervalId = setInterval(() => {
        if (i > 0) {
            console.log(i);
            i--;
        } 
        else {
            console.log("BOOM!");
            clearInterval(intervalId);
        };
    }, 1000);   
}

detonatorTimer(3); */

/*task 2 */
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {	
    let i = delay;
    let iteration = function() {
        if (i > 0) {
            console.log(i);
            i--;
            setTimeout(iteration, 1000);
        } 
        else {
            console.log("BOOM!");
        };
    }
    let intervalId = setTimeout(iteration, 1000);   
}
 

 /*task 3*/
 let student = {
    id: "1",
    name: "Olha",
    age: "30",
    gender: "female",
    city: "Kyiv",
    specialty: "Front-end",
    acquiredSkills: "HTML, CSS",
    skillsAfterCourse: "JavaScript",
    skillsLevel: "beginer",
    usingPronoun() {
        // @todo add support of non-binary genders
        return this.gender === "female" ? "She" : "He";
    }, 
    getPersonalInfo() {
        console.log(`${this.id} student name is ${this.name} and ${this.usingPronoun().toLowerCase()} is ${this.age} years old.`);
    },
    getCityOfLiving() {
        console.log(`${this.usingPronoun()} is living in ${this.city}.`);
    },
    getKnowledge() {
        console.log(`As ${this.usingPronoun().toLowerCase()} wants to work in ${this.specialty}, 
        ${this.usingPronoun().toLowerCase()} already know ${this.acquiredSkills} and want to study ${this.skillsAfterCourse}.`);
    }

} 
student.getPersonalInfo();
student.getCityOfLiving();
student.getKnowledge();
*/

/*task 4*/
let securedGetPersonalInfo = student.getPersonalInfo.bind(student);// якийсь код
let securedGetCityOfLiving = student.getCityOfLiving.bind(student);// якийсь код
let securedGetKnowledge = student.getKnowledge.bind(student);// якийсь код

setTimeout(securedGetPersonalInfo, 1000); // виведе коректний результат
setTimeout(securedGetCityOfLiving, 2000); // виведе коректний результат
setTimeout(securedGetKnowledge, 3000); // виведе коректний результат 

console.log(securedGetPersonalInfo);
console.log(securedGetCityOfLiving);
console.log(securedGetKnowledge);
*/