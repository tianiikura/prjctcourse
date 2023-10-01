"use strict";

function durationBetweenDates (startDate, endDate, dimension) {
    let startDateTime = new Date(startDate);
    let endDateTime = new Date(endDate);
    let periodDuration;
    
    switch (dimension) {
    case "days":
        periodDuration = 1
        break;
    case "hours":
        periodDuration = 24;
        break;
    case "minutes":
        periodDuration = 24 * 60;
        break;
    case "seconds":
        periodDuration = 24 * 60 * 60;
        break;
    default:
        return "Invalid dimension. Please choose from the list.";
    }

    let differenceInDays = Math.floor(Math.abs(endDateTime - startDateTime) / (24 * 60 * 60 * 1000));
    console.log(differenceInDays)
    let periodAmount = differenceInDays * periodDuration;

    return `${periodAmount} ${dimension}`;
};

function runDateCalculting () {
    const dateForm = document.getElementById("chooseDateform");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const daysOptionInput = document.getElementById("daysOption");
    const periodOptionInput = document.getElementById("periodOption");
    const actualResultContainer = document.getElementById("actualResult");

    const calculateTime = function (event) {
        event.preventDefault();
        const startDateValue = new Date(startDateInput.value);
        const endDateValue = new Date(endDateInput.value);
        const periodOptionValue = periodOptionInput.value;

        const result = durationBetweenDates(startDateValue, endDateValue, periodOptionValue);
        
        actualResultContainer.innerText = result;

        console.log(startDateValue, endDateValue, periodOptionValue, result);
    }

    dateForm.addEventListener("submit", calculateTime);

}

document.addEventListener("DOMContentLoaded", runDateCalculting);
