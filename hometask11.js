"use scrict"
let header2 = document.getElementById("headerTwo");
let firstSection = document.getElementsByTagName("section")[0];
let listItem5 = document.querySelector("li:nth-child(5)");
let hatredLevelLabel = document.getElementsByClassName("hatredLevelLabel")[0];
let hatredLevelBlock = hatredLevelLabel.closest(".hatredLevelBlock");

console.log(header2, firstSection, listItem5, hatredLevelLabel, hatredLevelBlock);
