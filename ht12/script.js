"use strict";

let bodyElement = document.querySelector(".body_light");
let bodyClasses = bodyElement.classList;
let switchButton = document.querySelector(".switch-button");
let lastTurningMassage = document.querySelector(".last-turning-off-message");

const STORAGE_KEY = "buttonState";

const getButtonStateFromStorage = () => {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    return state;
  };
  
const setButtonStateToStorage = (state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

function applyButtonState (isDark, date) {
    isDark ? bodyClasses.add("body_dark") : bodyClasses.remove("body_dark");
    switchButton.textContent = isDark ? "Turn on" : "Turn off";
    
    if (date) {
        let dateText = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        lastTurningMassage.textContent = `Last turn ${isDark ? "off" : "on"}: ${dateText}`;
    } else {
        lastTurningMassage.textContent = "";
    }
}

let currentButtonState = getButtonStateFromStorage();
let currentIsDark = currentButtonState ? currentButtonState.isDark : false;
let currentDate = currentButtonState ? new Date(currentButtonState.date) : null;

applyButtonState(currentIsDark, currentDate);

switchButton.addEventListener("click", function turnOff() {
    currentIsDark = !currentIsDark;
    let now = new Date();
    
    setButtonStateToStorage({
        date: now,
        isDark: currentIsDark,
    });

    applyButtonState(currentIsDark, now);
}); 


