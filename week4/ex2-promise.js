const STUDENTS = [
    { id: "6501", name: "สมหญิง", major: "CE", score: 78 },
    { id: "6502", name: "สมชาย", major: "CE", score: 92 },
    { id: "6503", name: "สมศรี", major: "IT", score: 55 },
    { id: "6504", name: "สมปอง", major: "IT", score: 45 }
];

function toGrade(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

function fetchStudentByIdAsync(id) {
    return new Promise((resolve, reject) => {
        if (typeof id !== "string" || id.trim() === "") {
            reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
            return;
        }

        setTimeout(() => {
            const student = STUDENTS.find((item) => item.id === id);

            if (!student) {
                reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
                return;
            }

            resolve({ ...student });
        }, 300);
    });
}

function promisify(callbackFunction) {
    return (...args) => new Promise((resolve, reject) => {
        callbackFunction(...args, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });
}

function fetchStudentByIdCallback(id, callback) {
    fetchStudentByIdAsync(id)
        .then((student) => callback(null, student))
        .catch((error) => callback(error));
}

const fetchStudentByIdPromisified = promisify(fetchStudentByIdCallback);

function checkStudent(id) {
    return fetchStudentByIdAsync(id)
        .then((student) => {
            console.log("พบข้อมูลนักศึกษา:", student);
            return student;
        })
        .catch((error) => {
            console.log("เกิดข้อผิดพลาด:", error.message);
            return null;
        })
        .finally(() => {
            console.log(`การค้นหารหัส ${id} เสร็จสิ้น`);
        });
}

checkStudent("6501");
checkStudent("6599");
checkStudent(42);

fetchStudentByIdPromisified("6501")
    .then((student) => {
        const result = { name: student.name, grade: toGrade(student.score) };
        return result;
    })
    .then((result) => {
        const report = `${result.name} ได้เกรด ${result.grade}`;
        return report;
    })
    .then((report) => {
        console.log("โซ่ 3 ขั้น:", report);
        return report;
    })
    .catch((error) => {
        console.log("โซ่เกิดข้อผิดพลาด:", error.message);
        return null;
    })
    .finally(() => {
        console.log("โซ่ 3 ขั้นเสร็จสิ้น");
    });