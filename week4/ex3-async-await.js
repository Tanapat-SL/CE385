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

async function reportSequential() {
    const ids = ["6501", "6502", "6503"];
    const startTime = Date.now();

    for (const id of ids) {
        const student = await fetchStudentByIdAsync(id);
        console.log("พบข้อมูลนักศึกษา:", student.name);
    }

    const elapsedTime = Date.now() - startTime;
    console.log(`ใช้เวลาแบบ sequential: ${elapsedTime} ms`);
}

async function reportParallel() {
    const ids = ["6501", "6502", "6503"];
    const startTime = Date.now();
    const students = await Promise.all(ids.map((id) => fetchStudentByIdAsync(id)));

    students.forEach((student) => {
        console.log("พบข้อมูลนักศึกษา:", student.name);
    });

    const elapsedTime = Date.now() - startTime;
    console.log(`ใช้เวลาแบบ parallel: ${elapsedTime} ms`);
}

async function safeReport(id) {
    try {
        const student = await fetchStudentByIdAsync(id);
        console.log(`พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`);
    } catch (error) {
        console.log(`ตรวจไม่พบ: ${error.message}`);
    } finally {
        console.log(`--- จบการตรวจสอบ ${id} ---`);
    }
}

async function main() {
    console.log("=== Sequential ===");
    await reportSequential();

    console.log("=== Parallel ===");
    await reportParallel();

    console.log("=== Safe report ===");
    await safeReport("6501");
    await safeReport("6599");
}

main().catch((error) => {
    console.log("เกิดข้อผิดพลาดใน main:", error.message);
});

// 1) try-catch ต้องครอบ await เพราะเมื่อ Promise ที่รอด้วย await
//    เกิด reject, await จะโยน error ออกมาเป็น exception
//    ทำให้ catch สามารถจับ error นั้นได้
// 2) Promise.all() ใช้รอหลาย Promise พร้อมกัน
//    ต้องสร้าง Promise ทั้งหมดก่อน แล้วจึง await Promise.all()
//    ทำให้ทั้ง 3 งานทำงานพร้อมกันและใช้เวลาประมาณ 300 ms

