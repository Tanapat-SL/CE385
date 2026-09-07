const STUDENTS = [
    { id: "6501" , name  : "สมหญิง", score: 78},
    {id : "6502" , name  : "สมชาย", score: 92},
];
function fetchStudentById(id, callback) {   
    return new Promise((resolve) => {
        setTimeout(() => resolve(STUDENTS.find((s) => s.id ===id)), 400);
    });
}

fetchStudentById("6502")
    .then((student) =>{
        console.log("ชั้น 1: ได้นักศึกษา =", student.name);
        return student.score;
})
    .then((score) => {
        console.log("ชั้น 2: ได้คะแนน =", score);
        return score >= 60 ? "B" : "F";
})
    .then((grade) => {
        console.log("ชั้น 3: ได้เกรด =", grade);
});