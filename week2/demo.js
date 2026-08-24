const name = "tanapat", score = 67;
//แบบเก่า : ต่อข้อความด้วย + อ่านยากและพลาดง่าย
console.log("แบบเก่า: ชื่อ "+ name + " ได้ " + score + " คะแนน ");
//แบบใหม่ Template Literal ใช้ backtick ` ` และ ${ }
console.log(`แบบใหม่: ชื่อ ${name} ได้ ${ score } คะแนน `);
// ใส่ "นิพจน์"
console.log (`ครึ่งหนึ่งของคะแนน คือ ${score / 2}`)
console.log (`ผ่านเกณฑ์หรือไม่ - ${score >= 50 ? 'ผ่าน' : 'ไม่ผ่าน'}`)

console.warn("console.warn - คำเตือน")
console.error("console.error - ข้อผิดพลาด")


