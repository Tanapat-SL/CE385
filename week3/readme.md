ex1-functions
// ฟังก์ชันนี้มีหน้าที่ ตรวจสอบว่าคะแนนอยู่ในช่วง 0–100 หรือไม่ถ้าอยู่นอกเหนือจากนี้จะคืนค่า false
function isValidScore(score) {
    if (score >= 0 && score <= 100) {
        return true;
    } else {
        return false;
    }
}
// เป็นฟังก์ชันคัดเกรดจากคะแนนเเละมีการตรวจสอบเงื่อนไขเพื่อไม่ให้คะแนนที่ติดลบหรือผิดปกติไปคิดเกรด
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
// find เป็นการหา object ที่ตรงตามเงื่อนไข
  const result = gradeScale.find(item => score >= item.minScore);
    if (result) {
        return result.grade;
    } else {
        return "F";
    }
}
// เป็นฟังก์ชันคำนวณคะแนนดิบจากสูตร raw หาร full และนำมาคูณ weight แล้ว return ค่า workshop
function calculateWorkshopScore(raw, full = 60, weight = 20 ) {
    let workshop = (raw / full) * weight;
    return workshop;
}
// เป็นฟังก์ชันคำนวณคะแนนรวมทั้งหมด
function calculateTotal(workshop, attendance, project, midterm, final) {
    let totalScore = workshop + attendance + project + midterm + final;
    return totalScore;
}
// สร้างตัวแปล student มีนักเรียน 3 คน
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
//เนื่องจากไม่ได้กำหนดค่า full weight ทำให้ใช่ค่า full weight จากฟังก์ชัน
console.log(calculateWorkshopScore(48));
//เนื่องจากกำหนดค่ามาครบทำให้คำนวณได้ปกติ
console.log(calculateWorkshopScore(48, 60, 20));
//จะได้ 20 เพราะ undefined ทำให้ full ใช้ค่า default = 60
console.log(calculateWorkshopScore(48, undefined, 25));
// เป็นการสร้างหัวตาราง
console.log("\nชื่อ\tWorkshop\tเข้าเรียน\tProject\tMidterm\tFinal\tรวม\tเกรด");
//เป็นการวนคำนวณนักศึกษา ให้วน Array student ทีละคน และเก็บข้อมูลของคนปัจจุบันไว้ในตัวแปร s
student.forEach((s) => {

    const workshop = calculateWorkshopScore(s.workshopRaw);
//คำนวณคะแนนรวมนำมาตัวเลขมาใช้ในฟังก์ชัน toGrade
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

________________________________________________________________________________________________________________________________________

ex2-collection
//สร้างรข้อข้อมูลตั้งต้น array ของ object 6 คน
let students = [
  { id: 67111997, name: "Tanapat", major: "Ce", score: 1, contact: { email: "tanapat@email.com", phone: "0812345678" } },
  { id: 67111998, name: "Piyapong", major: "Ce", score: 85, contact: { email: "piyapong@email.com", phone: "0812345679" } },
  { id: 67111999, name: "Nattapong", major: "It", score: 75, contact: { email: "nattapong@email.com", phone: "0812345680" } },
  { id: 67112000, name: "Somsak", major: "It", score: 45, contact: { email: undefined, phone: "0812345681" } }
];
// เป็นฟังก์ชันตรวจสอบว่ามีนักเรียนคนนี้อยู่จริงหรือไม่ 
function findById(students, id) 
{
    //ถ้าช่อง students และ id ไม่ว่างให้ไปขั้นตอนต่อไปถ้าว่างให้แสดงค่า undefined
  if (students && id !== undefined) {
    //ถ้าไม่ว่างเปล่าให้ตรวจสอบด้วย find ที่ละตัวว่าเป็นเลข id ของนักเรียนคนไหน
    return students.find(student => student.id === id);
  }
  return undefined;
}
// เป็นฟังก์ชันตรวจสอบสาขา
function findByMajor(students, major)
{
    //ตรวจสอบว่ามีข้อมูลหรือเปล่า
  if (students && major !== undefined) {
    //ถ้ามีข้อมูลกรองข้อมูลใน Array และคืนเฉพาะสมาชิกที่ตรงกับเงื่อนไข
    return students.filter(student => student.major === major);
  }
  return [];
}
// เป็นฟังก์ชันที่ตรวจสอบนักศึกษาว่าตกหรือไม่
function hasFailingStudent(students, id)
{
    //ถ้าทั้ง 2 ช่องไม่ใช่ค่าว่างเปล่าและมีอยู่ใน arrey
  if (students && id !== undefined) {
    // เป็นการประกาศค่า student และตวรจสอบเลขนักศึกษา
    const student = students.find(student => student.id === id);
    //ถ้านักศึกษามีตัวตนตรวจสอบว่าคะแนนน้อยกว่า 50 คืนค่า ture และแปลงเป็น false
    return student ? student.score < 50 : false;
  }
  return false;
}
//ฟังก์ชันตรวจสอบที่อยู่ email
function getEmail(students, id)
{
    //ตรวจสอบว่ามีข้อมูลหรือเปล่า
  if (students && id !== undefined) {
    //เป็นการตรวจสอบว่านักศึกษามีตัวตน
    const student = students.find(student => student.id === id);
    //ถ้ามี email แสดง email ถ้าไม่มีแสดงไม่พบข้อมูลติดต่อ
    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
  }
  // ถ้าไม่ email แสดงไม่พบข้อมูลติดต่อ
  else {
    return "ไม่พบข้อมูลติดต่อ";
  }
}
//เป็นการแสดงค่าจากฟังก์ชันทั้งหมด
console.log(findById(students, 67111997));
console.log(getEmail(students, 67111234997));
console.log(getEmail(students, 67112000));
console.log(findByMajor(students, "Ce"));
console.log(hasFailingStudent(students, 67111997));

________________________________________________________________________________________________________________________________________

ex3-transform
//ใช้ข้อมูลจากข้อสอง
let students = [
  { id: 67111997, name: "Tanapat", major: "Ce", score: 1, contact: { email: "tanapat@email.com", phone: "0812345678" } },
  { id: 67111998, name: "Piyapong", major: "Ce", score: 85, contact: { email: "piyapong@email.com", phone: "0812345679" } },
  { id: 67111999, name: "Nattapong", major: "It", score: 75, contact: { email: "nattapong@email.com", phone: "0812345680" } },
  { id: 67112000, name: "Somsak", major: "It", score: 45, contact: { email: undefined, phone: "0812345681" } }
];
//ฟังก์ชันตรวจสอบชื่อนักศึกษาใน arrey 
function getnames(students) {
  if (students) {
    return students.map(student => student.name);
  }
  return [];
}
//เป็นฟังก์ชันที่แสดงว่านักศึกษาคนไหนผ่าน
function getPassedStudents(students) {
    if (students) {
        // ตรวจสอบว่านักศึกษาคนไหนมีคะแนนมากกว่า 50 และแสดงค่าคะแนนเดิม
        return students.filter(student => student.score >= 50).map(student => student.name);
    }
    return [];  
}
//คิดคะแนนรวมของนักศึกษาทุกคนรวมกันใช้ reduce
function getTotalScore(students) {
    if (students) {
        //ถ้ามีค่า student ให้นำคะแนนของนักศึกษามารวมกันด้วย reduce 
        return students.reduce((total, student) => total + student.score, 0);
    }
    return 0;
}
//เป็นฟังก์ชันคำนวณค่าเฉลี่ย
function getAverageScore(students) {
    if (students) {
        //กำหนด totalScore = คะแนนรวมของนักศึกษาทั้งหมด
        const totalScore = getTotalScore(students);
        //คำนวณโดย (คะแนนรวม หาร ขนาดของนักเรียน)และแปลงเป็นทศนิยม 2 ตำแหน่ง
        return (totalScore / students.length).toFixed(2);
    }
    return 0;
}
//เป็นฟังก์ชันคำนวณว่าแต่ละเกรดมีกี่คน
function countByGrade(students) {
    //สร้าง object ว่าง
    const result = {};
    //เป็นการวนดู student ทุกคน 
    students.forEach(student => {
        //เอาคะแนนของนักศึกษาเข้าฟังก์ชัน toGrade
        const grade = toGrade(student.score);
        //ตรวจสอบว่าเกรดนี้มีอยู่ใน result ถ้ามีอยู่จะเพิ่มค่าที่ละ 1
        if (result[grade]) {
            result[grade]++;
        } else {
            result[grade] = 1;
        }
    });
    return result;
}
//เป็นฟังก์ชันคิดเกรด คะแนนมากว่าหรือเท่ากับ 80 เกรด A ไล่ลงไปเรื่อยๆถ้าต่ำกว่า 40 จะได้ F
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
//ฟังก์ชันหานักศึกษาที่ได้คะแนนสูงสุด
function getTopStudent(students) {
    if (students) {
        //ใช้ reduce() เพื่อเปรียบเทียบนักศึกษาทีละคนและเก็บคนที่คะแนนสูงกว่าเอาไว้
        return students.reduce((topStudent, currentStudent) => {
            //เป็นการนำนักศึกษามาเปรียนเทียบคนไหนมีคะแนนเยอะสุดก็จะไปเก็บอยู่ใน top student 
            return currentStudent.score > topStudent.score ? currentStudent : topStudent;
        }, students[0]);
    }
    return null;
}
//เป็นการแสดงผลฟังก์ชันทั้งหมด
console.log("คะแนนเฉลี่ยของทั้งหมด:", getAverageScore(students));
console.log("ชื่อของนักเรียนทั้งหมด:", getnames(students));
console.log("นักเรียนที่สอบตก:", getPassedStudents(students));
console.log("คะแนนรวมของทั้งหมด:", getTotalScore(students));
console.log("นับจำนวนนักเรียนตามเกรด:", countByGrade(students));
console.log("นักเรียนที่ได้คะแนนสูงสุด:", getTopStudent(students));