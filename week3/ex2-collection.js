let students = [
  { id: 67111997, name: "Tanapat", major: "Ce", score: 1, contact: { email: "tanapat@email.com", phone: "0812345678" } },
  { id: 67111998, name: "Piyapong", major: "Ce", score: 85, contact: { email: "piyapong@email.com", phone: "0812345679" } },
  { id: 67111999, name: "Nattapong", major: "It", score: 75, contact: { email: "nattapong@email.com", phone: "0812345680" } },
  { id: 67112000, name: "Somsak", major: "It", score: 45, contact: { email: undefined, phone: "0812345681" } }
];

function findById(students, id) 
{
  if (students && id !== undefined) {
    return students.find(student => student.id === id);
  }
  return undefined;
}

function findByMajor(students, major)
{
  if (students && major !== undefined) {
    return students.filter(student => student.major === major);
  }
  return [];
}
function hasFailingStudent(students, id)
{
  if (students && id !== undefined) {
    const student = students.find(student => student.id === id);
    return student ? student.score < 50 : false;
  }
  return false;
}
function getEmail(students, id)
{
  if (students && id !== undefined) {
    const student = students.find(student => student.id === id);
    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
  }
  else {
    return "ไม่พบข้อมูลติดต่อ";
  }
}

console.log(findById(students, 67111997));
console.log(getEmail(students, 67111234997));
console.log(getEmail(students, 67112000));
console.log(findByMajor(students, "Ce"));
console.log(hasFailingStudent(students, 67111997));