const WORKSHOP_FULL = 60;
const WORKSHOP_WEIGHT = 20;
const TOTAL_SCORE = 100;
const TARGET_SCORE = 80;

let workshopRaw = 48
let attendance = 9
let project = 17
let midterm = 15
let final = 20

let workshop = (workshopRaw / WORKSHOP_FULL) * WORKSHOP_WEIGHT;

let totalScore = workshop + attendance + project + midterm + final;
console.log("totalScore =", totalScore);

let percent = (totalScore / TOTAL_SCORE) * 100;
console.log("percent =", percent.toFixed(2) + "%");

let remaining = TARGET_SCORE - totalScore ;
console.log("remaining =", remaining);

console.log("===== ใบสรุปคะแนน =====");
console.log("workshopRaw    : " + workshopRaw);
console.log("attendance     : " + attendance);
console.log("project        : " + project);
console.log("midterm        : " + midterm);
console.log("final          : " + final);
console.log("remaining      : " + remaining);
console.log("totalScore     : " + totalScore);
console.log("========================");