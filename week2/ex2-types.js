// 1: สร้างตัวแปร 6 ชนิด 
let Name = "Tanapat";
let number = 67111997;
let isStudent = true;
let notDefined;
let emptyValue = null;
let Animal = ["cat", "lion", "pig"];

// แสดงค่าและชนิดข้อมูลของแต่ละตัวแปร
console.log("Name =", Name,             "| ชนิด:", typeof Name);
console.log("number =", number,         "| ชนิด:", typeof number);
console.log("isStudent =", isStudent,   "| ชนิด:", typeof isStudent);
console.log("notDefined =", notDefined, "| ชนิด:", typeof notDefined);
console.log("emptyValue =", emptyValue, "| ชนิด:", typeof emptyValue);
console.log("Animal =", Animal,         "| ชนิด:", typeof Animal);


//1. typeof null ได้อะไร
console.log("typeof null =", typeof null);

//2. ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า
let x;
console.log("x =", x, "| typeof x =", typeof x);

//3. typeof NaN
let nanValue = Number("abc");
console.log("nanValue =", nanValue, "| typeof nanValue =", typeof nanValue);



const inputAge = "20";
const inputScore = "85.5";

// แปลง inputAge จาก String เป็น Number
const age = Number(inputAge) + 5;

// แปลง inputScore เป็นเลขทศนิยม 1 ตำแหน่ง
const score = Number(inputScore).toFixed(1);

console.log("inputAge =", inputAge, "| typeof =", typeof inputAge);
console.log("age =", age, "| typeof =", typeof age);

console.log("inputScore =", inputScore, "| typeof =", typeof inputScore);
console.log("score =", score, "| typeof =", typeof score);

// เปรียบเทียบ inputAge === 20 กับ Number(inputAge) === 20
console.log("inputAge === 20 =", inputAge === 20);
console.log("Number(inputAge) === 20 =", Number(inputAge) === 20);

// ตรวจสอบว่าเป็น NaN หรือไม่
console.log("nanValue is NaN =", Number.isNaN(nanValue));