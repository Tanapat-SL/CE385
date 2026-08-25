1 ex1-profile
สร้างตัวแปร 5 ตัวแปรใช้ const เพราะไม่ต้องการกำหนดค่าใหม่
    const nickname = "ลิฟท์";
    const studentNumber = "67111997";
    const age = 20;
    const major = "คอมพิวเตอร์";
    const registeredSubjects = "CE385";
    const remainingYears = 2;
และแสดงผลด้วย console.log โดยใช้ Template Literal
    console.log("===== บัตรแนะนำตัว =====");
    console.log("ชื่อเล่น      : " + nickname);
    console.log("รหัสนักศึกษา  : " + studentNumber);
    console.log("อายุ          : " + age + " ปี");
    console.log("สาขาวิชา      : " + major);
    console.log("ลงทะเบียน     : " + registeredSubjects + " วิชา");
    console.log("ปีที่จะจบ      : " + remainingYears + " ปี");
    console.log("========================");

2 ex2-types
สร้างตัวแปรให้ 6 ชนิดใช้ let เพราะเราอาจจะมีการเปลี่ยนแปลงค่าได้และมีการใช้ typeof เผื่อเช็คว่าตัวนี้เป็นค่าอะไร
เช่น Name = "Tanapat"  typeof string และได้มีการสร้างตัวแปร 6 ตัวดังนี้
    let Name = "Tanapat";
    let number = 67111997;
    let isStudent = true;
    let notDefined;
    let emptyValue = null;
    let Animal = ["cat", "lion", "pig"];

typeof null ได้อะไร 
    จริงๆแล้วมันไม่มีค่าแต่ถ้าลองทำดู typeof null จะคืนค่าเป็น object

//เป็นการแสดงผล x ผลลัพท์ที่ออกมาคือ undefined เพราะมันไม่มีค่าแค่ประกาศตัวแปรไว้เเต่ยังไม่มีค่า
    let x; //ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า
    console.log("x =", x, "| typeof x =", typeof x); 

//ผลลัพท์ทที่ออกมาเลยขึ้นเป็น NaN(Not a Number)
    let nanValue = Number("abc"); //เราพยายามที่จะแปลง abc เป็น number แต่ abc ไม่ใช่ตัวเลขเลยไม่สามารถแปลงได้
    console.log("nanValue =", nanValue, "| typeof nanValue =", typeof nanValue); 

// ประกาศตัวแปร age 20เป็น string
    const inputAge = "20"; 
//ประกาศตัวแปร score 85.5 เป็น string
    const inputScore = "85.5"; 

// แปลง age เป็น number แล้ว + 5
    const age = Number(inputAge) + 5; 

// แปลง inputScore เป็นเลขทศนิยม 1 ตำแหน่งด้วย .toFixed(1)
    const score = Number(inputScore).toFixed(1); 

//เป็นการแสดงผลลัพท์ว่า age เป็นเท่าไหร่ type อะไร
    console.log("inputAge =", inputAge, "| typeof =", typeof inputAge);
    console.log("age =", age, "| typeof =", typeof age);       

//เป็นการแสดงผลลัพท์ว่า score เป็นเท่าไหร่ type อะไร
    console.log("inputScore =", inputScore, "| typeof =", typeof inputScore);
    console.log("score =", score, "| typeof =", typeof score);     

// เปรียบเทียบ inputAge === 20 กับ Number(inputAge) === 20 ว่า age 20 นี้แปลงเป็นตัวเลขแล้วหรือยัง
    console.log("inputAge === 20 =", inputAge === 20);
    console.log("Number(inputAge) === 20 =", Number(inputAge) === 20); 

// ตรวจสอบว่าเป็น NaN เราพยายามที่จะแปลง abc เป็น number แต่ abc ไม่ใช่ตัวเลขเลยไม่สามารถแปลงได้ผลลัพท์เลยออกมาเป็น NaN
    console.log("nanValue is NaN =", Number.isNaN(nanValue));

3 ex3-calculator
//ประกาศตัวแปรใช้ const เพราะไม่สามารถเปลี่ยนแปลงค่าได้
    const WORKSHOP_FULL = 60;
    const WORKSHOP_WEIGHT = 20;
    const TOTAL_SCORE = 100;
    const TARGET_SCORE = 80;

////ประกาศตัวแปรใช้ let เพราะค่าคะแนนของนักเรียนไม่ได้มีคนเดียวมีการเปลี่ยนแปลงเสมอ
    let workshopRaw = 48
    let attendance = 9
    let project = 17
    let midterm = 15
    let final = 20

//แปลงคะแนน Workshop ตามสูตรของวิชา: (คะแนนดิบ ÷ 60) × 20
    let workshop = (workshopRaw / WORKSHOP_FULL) * WORKSHOP_WEIGHT;

//คำนวนคะแนนรวมทั้งหมด
    let totalScore = workshop + attendance + project + midterm + final;
    console.log("totalScore =", totalScore);

//คิดคะแนนออกมาเป็นเปอร์เซน ((คะแนนรวม / คะแนนเต็ม )คูณ 100) และเเสดงออกมาเป็นทศนิยม 2 ตำแหน่ง (.toFixed(2))
    let percent = (totalScore / TOTAL_SCORE) * 100;
    console.log("percent =", percent.toFixed(2) + "%");

//คำนวนคะแนนที่ขาดด้วย (คะแนนที่จะได้ A - คะแนนที่ได้)
    let remaining = TARGET_SCORE - totalScore ;
    console.log("remaining =", remaining);

//แสดงผล
    console.log("===== ใบสรุปคะแนน =====");
    console.log("workshopRaw    : " + workshopRaw);
    console.log("attendance     : " + attendance);
    console.log("project        : " + project);
    console.log("midterm        : " + midterm);
    console.log("final          : " + final);
    console.log("remaining      : " + remaining);
    console.log("totalScore     : " + totalScore);
    console.log("========================");

3 ex3-grade
 // ตรวจสอบเงื่อนไขขอบเขตคะแนนก่อน เพื่อป้องกันการให้เกรดผิด ถ้าเรียงจากน้อยไปมาก คะแนนที่ < 0 หรือ >= 100 จะผ่านเงื่อนไขเกรด F หรือ A อื่นๆได้ซึ่งผิด
    function toGrade(score) {
    if (score <= 0) {
        return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100";
    }
    if (score >= 100) {
        return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 75 && score <= 79) {
        return "B+";
    }
    else if (score >= 70 && score <= 74) {
        return "B";
    }
    else if (score >= 65 && score <= 69) {
        return "C+";
    }
    else if (score >= 60 && score <= 64) {
        return "C";
    }
    else if (score >= 55 && score <= 59) {
        return "D+";
    }
    else if (score >= 50 && score <= 54) {
        return "D";
    }
    else {
        return "F";
    }
    }
    for (const s of [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120]) {
    console.log(s + " คะแนน → เกรด " + toGrade(s));
    }

5 ex5-switch
//เขียนฟังก์ชัน getmenuprice รับชื่อและคืนค่าข้าวเช่น รับชื่อต้มยำกุ้งก็จะรับชื่อไว้และคืนค่าเป็น 120 ไป
    function getMenuPrice(menu) {
        switch (menu) {
            case "ข้าวผัด":
            case "ข้าวมันไก่":
            case "ข้าวหมูแดง":
                return 50;
            case "ผัดไทย":
                return 60;
            case "ต้มยำกุ้ง":
                return 120;
            default:
                return 0;
        }
    }
//เขียนฟังก์ชัน getsizemultiplier เหมือนกับอันแรก รับชื่อ ธรรมดามา คืนค่า 1 กลับไปเอาไว้เป็นตัวคูณเพิ่มราคาตาม size
    function getSizeMultiplier(size) {
        switch (size) {
            case "ธรรมดา": return 1;
            case "พิเศษ": return 1.5;
            case "จัมโบ้": return 2 ;
            default: return 1;
        }
    }
// กำหนดรายการสั่งอาหารเช่น ผัดไทย size พิเศษ จำนวน 2 
    const orders = [
        { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
        { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1 },
        { menu: "ต้มยำกุ้ง", size: "พิเศษ", qty: 2 },
        { menu: "ข้าวผัด", size: "จัมโบ้", qty: 1 },
        { menu: "ข้าวหมูแดง", size: "ธรรมดา", qty: 3 },
        { menu: "ส้มตำ", size: "พิเศษ", qty: 1 } 
    ];

//กำหนดค่า total เป็น 0 เอาไว้คิดรวมค่าอาหารทั้งหมดที่เป็น let เพราะค่าอาหารมีการเปลี่ยนแปลงตาม order
let total = 0; 

//เป็นการคำนวนราคาคือ เมณู * size * จำนวน
    for (const order of orders) {
        const itemTotal =
            getMenuPrice(order.menu) * getSizeMultiplier(order.size) * order.qty;

//เอาไว้แสดงรายละเอียดของแต่ละรายการ ${...} เป็นการเอาค่าตัวแปรมาใส่ในข้อความและคิดราคารวมเป็น ทศนิยม 2 ตำแหน่ง
        console.log(
            `${order.menu} (${order.size}) x${order.qty} = ${itemTotal.toFixed(2)} บาท`
        );

        total += itemTotal;
    }
    console.log(`ราคารวมทั้งบิล = ${total.toFixed(2)} บาท`);

6 ex6-login
//ประกาศ user password เป็น let เพราะ user มีการเปลี่ยนอยู่เสมอ pass ก็มีการเปลี่ยนตาม user
    let username = "admin"
    let password = "ce385password"

function login(inputUser, inputPass, role, isActive, age) {
//ตรวจ username / password ก่อน
    if (inputUser !== "admin" || inputPass !== "ce385pass") { 
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }
//ตรวจว่าบัญชีถูกระงับหรือไม่
    if (isActive === false) {
        return "บัญชีนี้ถูกระงับการใช้งาน";
    }
//ตรวจอายุ
    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }
//ตรวจสิทธิ์อาจารย์
    if (role === "อาจารย์") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    }
//ตรวจสิทธิ์นักศึกษา
    if (role === "นักศึกษา") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
    }
    return "ไม่พบสิทธิ์ผู้ใช้งาน";
}
// ===== ทดสอบ 6 กรณี =====
    console.log("1.", login("admin", "ce385pass", "อาจารย์", true, 25));
    console.log("2.", login("admin", "ce385pass", "นักศึกษา", true, 20));
    console.log("3.", login("admin", "wrongpass", "อาจารย์", true, 25));
    console.log("4.", login("admin", "ce385pass", "อาจารย์", false, 25));
    console.log("5.", login("admin", "ce385pass", "นักศึกษา", true, 17));
    console.log("6.", login("admin", "ce385pass", "นักศึกษา", true, 25));
