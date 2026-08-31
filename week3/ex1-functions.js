function isValidScore(score) {
    if (score >= 0 && score <= 100) {
        return true;
    } else {
        return false;
    }
}
function toGrade(score) {
  // ตรวจสอบเงื่อนไขขอบเขตคะแนนก่อน เพื่อป้องกันการให้เกรดผิด
  if (!isValidScore(score)) {
    return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100";
  }
  
  // ใช้ array ของเกรด objects และ find เพื่อหาเกรดที่ตรงกับคะแนน
  const gradeScale = [
    { minScore: 80, grade: "A" },
    { minScore: 75, grade: "B+" },
    { minScore: 70, grade: "B" },
    { minScore: 65, grade: "C+" },
    { minScore: 60, grade: "C" },
    { minScore: 55, grade: "D+" },
    { minScore: 50, grade: "D" },
    { minScore: 0, grade: "F" }
  ];
  
  const result = gradeScale.find(item => score >= item.minScore);
    if (result) {
        return result.grade;
    } else {
        return "F";
}
}
function calculateWorkshopScore(raw, full = 60, weight = 20 ) {
    let workshop = (raw / full) * weight;
    return workshop;
}
function calculateTotal(workshop, attendance, project, midterm, final) {
    let totalScore = workshop + attendance + project + midterm + final;
    return totalScore;
}

let student = [
{
    name: "Tanapat",
    workshopRaw: 48,
    attendance: 9,
    project: 17,
    midterm: 15,
    final: 20
},
{ 
    name: "lift",
    workshopRaw: 60,
    attendance: 10,
    project: 20,
    midterm: 20,
    final: 20
},
{
    name: "Nattapong",
    workshopRaw: 30,
    attendance: 8,
    project: 15,
    midterm: 10,
    final: 15
}
];

console.log(calculateWorkshopScore(48));
console.log(calculateWorkshopScore(48, 60, 20));
//จะได้ 20 เพราะ undefined ทำให้ full ใช้ค่า default = 60
console.log(calculateWorkshopScore(48, undefined, 25));

console.log("\nชื่อ\tWorkshop\tเข้าเรียน\tProject\tMidterm\tFinal\tรวม\tเกรด");

student.forEach((s) => {

    const workshop = calculateWorkshopScore(s.workshopRaw);

    const total = calculateTotal(
        workshop,
        s.attendance,
        s.project,
        s.midterm,
        s.final
    );

    const grade = toGrade(total);

    console.log(
        `${s.name}\t${workshop.toFixed(2)}\t\t${s.attendance}\t\t${s.project}\t${s.midterm}\t${s.final}\t${total.toFixed(2)}\t${grade}`
    );
});

