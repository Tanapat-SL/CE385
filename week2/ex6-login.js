let username = "admin"
let password = "ce385password"

function login(inputUser, inputPass, role, isActive, age) {

    // 1. ตรวจ username / password ก่อน
    if (inputUser !== "admin" || inputPass !== "ce385pass") {
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }

    // 2. ตรวจว่าบัญชีถูกระงับหรือไม่
    if (isActive === false) {
        return "บัญชีนี้ถูกระงับการใช้งาน";
    }

    // 3. ตรวจอายุ
    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }

    // 4. ตรวจสิทธิ์อาจารย์
    if (role === "อาจารย์") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    }

    // 5. ตรวจสิทธิ์นักศึกษา
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
