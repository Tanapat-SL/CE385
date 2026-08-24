function toGrade(score) {
  // ตรวจสอบเงื่อนไขขอบเขตคะแนนก่อน เพื่อป้องกันการให้เกรดผิด
  // ถ้าเรียงจากน้อยไปมาก คะแนนที่ < 0 หรือ >= 100 จะผ่านเงื่อนไขเกรด F หรือ A อื่นๆ ได้ซึ่งผิด
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