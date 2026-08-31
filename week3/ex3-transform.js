let students = [
  { id: 67111997, name: "Tanapat", major: "Ce", score: 1, contact: { email: "tanapat@email.com", phone: "0812345678" } },
  { id: 67111998, name: "Piyapong", major: "Ce", score: 85, contact: { email: "piyapong@email.com", phone: "0812345679" } },
  { id: 67111999, name: "Nattapong", major: "It", score: 75, contact: { email: "nattapong@email.com", phone: "0812345680" } },
  { id: 67112000, name: "Somsak", major: "It", score: 45, contact: { email: undefined, phone: "0812345681" } }
];

function getnames(students) {
  if (students) {
    return students.map(student => student.name);
  }
  return [];
}

function getPassedStudents(students) {
    if (students) {
        return students.filter(student => student.score <= 50).map(student => student.name);
    }
    return [];  
}

function getTotalScore(students) {
    if (students) {
        return students.reduce((total, student) => total + student.score, 0);
    }
    return 0;
}
function getAverageScore(students) {
    if (students) {
        const totalScore = getTotalScore(students);
        return (totalScore / students.length).toFixed(2);
    }
    return 0;
}
function countByGrade(students) {
    const result = {};
    students.forEach(student => {
        const grade = toGrade(student.score);
        if (result[grade]) {
            result[grade]++;
        } else {
            result[grade] = 1;
        }
    });
    return result;
}
function toGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 75) {
        return "B+";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 65) {
        return "C+";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 55) {
        return "D+";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function getTopStudent(students) {
    if (students) {
        return students.reduce((topStudent, currentStudent) => {
            return currentStudent.score > topStudent.score ? currentStudent : topStudent;
        }, students[0]);
    }
    return null;
}

console.log("คะแนนเฉลี่ยของทั้งหมด:", getAverageScore(students));
console.log("ชื่อของนักเรียนทั้งหมด:", getnames(students));
console.log("นักเรียนที่สอบตก:", getPassedStudents(students));
console.log("คะแนนรวมของทั้งหมด:", getTotalScore(students));
console.log("นับจำนวนนักเรียนตามเกรด:", countByGrade(students));
console.log("นักเรียนที่ได้คะแนนสูงสุด:", getTopStudent(students));