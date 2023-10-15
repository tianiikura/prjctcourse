"use strict";

let bodyElement = document.querySelector(".body_light");
let bodyClasses = bodyElement.classList;
let switchButton = document.querySelector(".switch-button");
let lastTurningMassage = document.querySelector(".last-turning-off-message");

switchButton.addEventListener("click", function turnOff() {
    let isDark =  bodyClasses.toggle("body_dark");
    switchButton.textContent = isDark ? "Turn on" : "Turn off";
    
    let now = new Date();
    let nowText = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.log(now.getFullYear());
    lastTurningMassage.textContent = `Last turn ${isDark ? "off" : "on"}: ${nowText}`;
}); 

//
