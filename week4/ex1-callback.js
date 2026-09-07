const STUDENTS = [
	{ id: "67111997", name: "Tanapat", major: "CE", score: 78 },
	{ id: "67111998", name: "Piyapong", major: "CE", score: 85 },
	{ id: "67111999", name: "Nattapong", major: "IT", score: 75 },
	{ id: "67112000", name: "Somsak", major: "IT", score: 45 }
];

function fetchStudentById(id) {
	return new Promise((resolve, reject) => {
		if (typeof id !== "string" || id.trim() === "") {
			reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
			return;
		}

		setTimeout(() => {
			const student = STUDENTS.find((item) => item.id === id);

			if (student) {
				resolve({ ...student });
			} else {
				reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
			}
		}, 300);
	});
}

fetchStudentById("67111998")
	.then((student) => {
		console.log("พบข้อมูลนักศึกษา:", student);
		return student;
	})
	.then((student) => {
		console.log("ชื่อ:", student.name);
	})
	.catch((error) => {
		console.log("เกิดข้อผิดพลาด:", error.message);
	});

fetchStudentById("67112999")
	.then((student) => {
		console.log("ไม่ควรเข้ามาที่นี่:", student);
	})
	.catch((error) => {
		console.log("ค้นหาไม่สำเร็จ:", error.message);
	});

fetchStudentById(42)
	.then((student) => {
		console.log("ไม่ควรเข้ามาที่นี่:", student);
	})
	.catch((error) => {
		console.log("ข้อมูลไม่ถูกต้อง:", error.message);
	});
