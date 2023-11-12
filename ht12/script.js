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
        let dateText = getFormattedDate(date);
        lastTurningMassage.textContent = `Last turn ${isDark ? "off" : "on"}: ${dateText}`;
    } else {
        lastTurningMassage.textContent = "";
    }
}

function getFormattedDate (date) {
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
}

let currentButtonState = getButtonStateFromStorage();
let currentIsDark = currentButtonState ? currentButtonState.isDark : false;
let currentDate = currentButtonState ? new Date(currentButtonState.date) : null;

applyButtonState(currentIsDark, currentDate);

switchButton.addEventListener("click", function () {
    currentIsDark = !currentIsDark;
    let now = new Date();
    
    setButtonStateToStorage({
        date: now,
        isDark: currentIsDark,
    });

    applyButtonState(currentIsDark, now);
}); 


