"use strict";
//розрахунок періоду між датами
function durationBetweenDates (startDate, endDate, dimension, daysOption) {
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

    let differenceInDays = 0;
    switch (daysOption) {
        case "allDays":
            differenceInDays = Math.floor(Math.abs(endDateTime - startDateTime) / (24 * 60 * 60 * 1000));
            break;
        case "workingDays":
            for (let c = new Date(startDate); c < endDateTime; c.setDate(c.getDate() + 1)) {
                let isWeekend = c.getDay() === 6 || c.getDay() === 0;
                if (isWeekend === false) {
                    differenceInDays++;
                }
            };
            break;
        case "weekends":
            for (let c = new Date(startDate); c < endDateTime; c.setDate(c.getDate() + 1)) {
                let isWeekend = c.getDay() === 6 || c.getDay() === 0;
                if (isWeekend === true) {
                    differenceInDays++;
                }
            };
            break;
    }
    
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
    const weekPeriodButton = document.getElementById("weekPeriod");
    const monthPeriodButton = document.getElementById("monthPeriod");

    datesHistory.forEach(addToTable);

    //Виставленн дати не раніше початкової і не пізніше кінцевої
    const enableEndDateInput = function () {
        endDateInput.disabled = startDateInput.value === "" ? true : false;
        endDateInput.min = startDateInput.value;
    }
    startDateInput.addEventListener("change", enableEndDateInput);
    enableEndDateInput();
    endDateInput.addEventListener("change", () => startDateInput.max = endDateInput.value);

    //Прессет періоду тиждень/місяць
    function chooseDatePeriod (event) {
        const dateValue = new Date(startDateInput.value);   
        if (event.target === weekPeriodButton) {
            dateValue.setDate(dateValue.getDate() + 7);
        }
        if (event.target === monthPeriodButton) {
            dateValue.setDate(dateValue.getDate() + 30);
        }
        endDateInput.valueAsDate = dateValue;
        
    }
    weekPeriodButton.addEventListener("click", chooseDatePeriod);
    monthPeriodButton.addEventListener("click", chooseDatePeriod);


    const calculateTime = function (event) {
        event.preventDefault();
        const startDateValue = startDateInput.value;
        const endDateValue = endDateInput.value;
        const periodOptionValue = periodOptionInput.value;
        const daysOptionValue = daysOptionInput.value;

        const result = durationBetweenDates(startDateValue, endDateValue, periodOptionValue, daysOptionValue);
        
        actualResultContainer.innerText = result;

        const record = {
            startDate: startDateValue,
            endDate: endDateValue,
            result: result,
        };

        addRecordToStorage(record);

        addToTable(record);

        console.log(startDateValue, endDateValue, periodOptionValue, result);
    }

    dateForm.addEventListener("submit", calculateTime);
}

document.addEventListener("DOMContentLoaded", runDateCalculting);

let datesHistory = JSON.parse(localStorage.getItem("datesHistory")) || []; 

function addRecordToStorage (record) {
    datesHistory.push(record);
    datesHistory.length > 10 && datesHistory.shift();
    localStorage.setItem("datesHistory", JSON.stringify(datesHistory));
}

function addToTable (record) {
    let tableBody = document.getElementById("historyTableData");
    let newRow = document.createElement("tr");
    tableBody.append(newRow);

    let cell = document.createElement("td");
    newRow.append(cell);
    cell.innerText = record.startDate;

    cell = document.createElement("td");
    newRow.append(cell);
    cell.innerText = record.endDate;
    
    cell = document.createElement("td");
    newRow.append(cell);
    cell.innerText = record.result;


    tableBody.children.length > 10 && tableBody.firstElementChild.remove();
}
