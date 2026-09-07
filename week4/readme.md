1 ex1-callback=======================================================================================================================================
const STUDENTS = [   ---สร้าง arrey เก็บ object 
	{ id: "67111997", name: "Tanapat", major: "CE", score: 78 },
	{ id: "67111998", name: "Piyapong", major: "CE", score: 85 },
	{ id: "67111999", name: "Nattapong", major: "IT", score: 75 },
	{ id: "67112000", name: "Somsak", major: "IT", score: 45 }
];

function fetchStudentById(id) {   ---สร้างฟังก์ชัน
	return new Promise((resolve, reject) => {    ---เป็นการให้สัญญาว่าจะตอบกลับมรทั้งเเบบสำเร็จและแบบไม่สำเร็จ
		if (typeof id !== "string" || id.trim() === "") {  ---เป็นการตวจว่า Id เป็น string และ ไม่ใช่ค่าว่างหรือป่าว
			reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));  ---เป็นการตอบกลับที่ไม่เจอรหัส นศ หรือ error แสดงผลเป็น รหัสไม่ถูกต้องและ return ค่า
			return;
		}

		setTimeout(() => {  ---เป็นการจำลองการทำงานที่ต้องใช้เวลา 300 ms
			const student = STUDENTS.find((item) => item.id === id);    --- เป็นเช็คเงื่อนไขหาเลข นศ ที่อยู่ใน arrey ถ้าหาเจอจะคืนค่าไปที่ student

			if (student) {  --- ถ้าstudent มีค่าจะทำตามเงื่อนไข resolve เป็นการทำเงื่อนไขสำเร็จก็จะแสดง student
				resolve({ ...student });
			} else {
				reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));   ---reject ทำเงื่อนไม่สำเร็จแสดง ไม่พบรหัสนักศึกษา
			}
		}, 300);
	});
}

fetchStudentById("67111998")    ---เรียกใช้ฟังก์ชันด้วยเลข นศ 67111998
	.then((student) => {    ---ถ้าตรวจเลข นศ และทำสำเร็จก็จะทำสิ่งนี้ต่อก็จะแสดงผลว่า พบนักศึกษา และ return ค่า
		console.log("พบข้อมูลนักศึกษา:", student);  
		return student;
	})
	.then((student) => {    ---ถ้าตรวจเลข นศ และทำสำเร็จก็จะทำสิ่งนี้ต่อก็จะแสดงผลชื่อนักศึกษา
		console.log("ชื่อ:", student.name);   
	})
	.catch((error) => {   ---ถ้าเกิด erorr ให้แสดง เกิดข้อผิดพลาด ทันที
		console.log("เกิดข้อผิดพลาด:", error.message);
	});

fetchStudentById("67112999")    ---เรียกใช้ฟังก์ชันด้วยเลข 67112999
	.then((student) => {    ---เมื่อทำฟังก์ชันเสร็จก็ทำงานต่อและถ้า student เป็นรหัส นศ ที่ไม่ถูกต้องก็จะ error ทำให้ catch ทำงานแสดง ค้นหาไม่สำเร็จ
		console.log("ไม่ควรเข้ามาที่นี่:", student);
	})
	.catch((error) => {
		console.log("ค้นหาไม่สำเร็จ:", error.message);  ---student เป็นรหัส นศ ที่ไม่ถูกต้องก็จะ error ทำให้ catch ทำงานแสดง ค้นหาไม่สำเร็จ
	});

fetchStudentById(42)    ---เรียกใช้ฟังก์ชันด้วยเลข 42
	.then((student) => {    --- เมื่อทำให้ฟังก์ชันเสร็จก็จะทำที่ then ต่อทันทีแต่เพราะเลข นศ ไม่ถูกต้องทำให้ error 
		console.log("ไม่ควรเข้ามาที่นี่:", student);
	})
	.catch((error) => { --- เมื่อ error catch ก็จำทำงานทำให้แสดงผล ข้อมูลไม่ถูกต้องและ error message
		console.log("ข้อมูลไม่ถูกต้อง:", error.message);
	});

2 ex2-promise========================================================================================================================================
const STUDENTS = [  ---สร้าง arrey เก็บ object 
    { id: "6501", name: "สมหญิง", major: "CE", score: 78 },
    { id: "6502", name: "สมชาย", major: "CE", score: 92 },
    { id: "6503", name: "สมศรี", major: "IT", score: 55 },
    { id: "6504", name: "สมปอง", major: "IT", score: 45 }
];

function toGrade(score) {   ---ฟังก์ชันตัดเกรด นศ
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

function fetchStudentByIdAsync(id) {    ---สร้างฟังก์ชันค้นหานักศึกษาด้วย Promise
    return new Promise((resolve, reject) => {   ---เป็นการให้สัญญาว่าจะตอบกลับมรทั้งเเบบสำเร็จและแบบไม่สำเร็จ
        if (typeof id !== "string" || id.trim() === "") {   ---เป็นการตวจว่า Id เป็น string และ ไม่ใช่ค่าว่างหรือป่าว
            reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));      ---เป็นการตอบกลับที่ไม่เจอรหัส นศ หรือ error แสดงผลเป็น รหัสไม่ถูกต้องและ return ค่า
            return;
        }

        setTimeout(() => {      ---จำลองการค้นหาข้อมูลจากฐานข้อมูล ใช้เวลา 300 ms
            const student = STUDENTS.find((item) => item.id === id);

            if (!student) { ---ถ้าไม่ใช่ student ก็เข้าเงื่อนไขและแสดง ไม่พบนศ
                reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
                return;
            }

            resolve({ ...student });    ---ถ้า student มีในระบบก็จะใช้ resolve ทันที
        }, 300);
    });
}

function promisify(callbackFunction) {  ---แปลง Callback เป็น Promise
    return (...args) => new Promise((resolve, reject) => {  ---คืนฟังก์ชันใหม่ออกมาเป็น promise อีกตัว
        callbackFunction(...args, (error, result) => { --- เอาฟังก์ชันเดิมมาใช้โดยมีแค่ error result
            if (error) {    ---ถ้า error ก็จะ reject ออกมาเเละ return
                reject(error);
                return;
            }

            resolve(result);    ---ถ้าไม่ error ก็จะ resolve
        });
    });
}

function fetchStudentByIdCallback(id, callback) {   ---เอาฟังก์ชันที่ทำงานแบบ Promise มาแปลงให้สามารถเรียกแบบ Callback ได้ รับค่า id callback
    fetchStudentByIdAsync(id)   ---เรียกฟังก์ชันค้นหานักศึกษาแบบ Promise
        .then((student) => callback(null, student)) ---ถ้าเป็น student ก็จะ callback จาก error เป็น null, student
        .catch((error) => callback(error)); ---ถ้าไม่ใช่ นศ ก็จะ callback error
}

const fetchStudentByIdPromisified = promisify(fetchStudentByIdCallback);    ---เป็นcallback เป็น promise ออกมาเป็น fetchStudentByIdPeomisidied

function checkStudent(id) {     ---ฟังก์ชันตรวจสอบ นศ จากรหัส นศ
    return fetchStudentByIdAsync(id)    ---เรียกฟังก์ชันค้นหานักศึกษา
        .then((student) => {        --- เมื่อทำฟังก์ชันเสร็จถ้าเป็น นศ ก็แสดง พบข้อฒูลนศ และ return ต่า student
            console.log("พบข้อมูลนักศึกษา:", student);
            return student;
        })
        .catch((error) => {     ---ถ้าไม่พบก็จะแสดง เกิดข้อผิดพลาด และ errormessage และ return ค่า null
            console.log("เกิดข้อผิดพลาด:", error.message);
            return null;
        })
        .finally(() => {    ---ทำงานทุกครั้งเมื่อทำอันบนเสร็จแสดง การค้นหา Id เสร็จสิ้น
            console.log(`การค้นหารหัส ${id} เสร็จสิ้น`);
        });
}

checkStudent("6501");   ---เรียกใช้ฟังก์ชัน
checkStudent("6599");   ---เรียกใช้ฟังก์ชัน
checkStudent(42);       ---เรียกใช้ฟังก์ชัน

fetchStudentByIdPromisified("6501") ---เรียกใช้ฟังก์ชัน 
    .then((student) => {    ---เมื่อทำฟังก์ชันเสร็จก็ทำต่อทันทีเมื่อคืนค่า student ทำให้สร้างตัวแปร result โดยแสดง name grade จากฟังก์ชัน tograde return ค่า rusult ส่งไปที่ then ตัวต่อไป
        const result = { name: student.name, grade: toGrade(student.score) };
        return result;
    })
    .then((result) => {     --- result ถูกส่งมา then ก็จะทำงาน 
        const report = `${result.name} ได้เกรด ${result.grade}`; ---แสดงชื่อ ได้เกรด A เเละส่งไปให้ then ตัวต่อไป
        return report;
    })
    .then((report) => {     ---เมื่อถูกส่งมาแสดงข้อความ โซ่สามชั้น และ report 
        console.log("โซ่ 3 ขั้น:", report);
        return report;
    })
    .catch((error) => {        ---ถ้า error แสดงโซ่เกิดข้อผิดพลาดและ error message และส่งค่า ว่าง
        console.log("โซ่เกิดข้อผิดพลาด:", error.message);
        return null;
    })
    .finally(() => {    ---ไม่ว่าจะผิดพลาดหรือไม่ก็จะทำงานแสดง โซ่ 3 ชั้นเสร็จสิ้น
        console.log("โซ่ 3 ขั้นเสร็จสิ้น");
    });

3 ex3-async-await=========================================================================================================================================

const STUDENTS = [      ---สร้าง arrey เก็บ object 
    { id: "6501", name: "สมหญิง", major: "CE", score: 78 },
    { id: "6502", name: "สมชาย", major: "CE", score: 92 },
    { id: "6503", name: "สมศรี", major: "IT", score: 55 },
    { id: "6504", name: "สมปอง", major: "IT", score: 45 }
];

function toGrade(score) {       ---ฟังก์ชันตัดเกรด
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

function fetchStudentByIdAsync(id) {    --- ฟังก์ชัน promise
    return new Promise((resolve, reject) => {      --- มีแค่สองอย่าง resolve สำเร็จ reject ไม่สำเร็จ
        if (typeof id !== "string" || id.trim() === "") {   ---เป็นการตวจว่า Id เป็น string และ ไม่ใช่ค่าว่างหรือป่าว
            reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));  ---ถ้า reject คือไม่สำเร็จแสดง รหัสนักศึกษาไม่ถูกต้อง
            return;
        }

        setTimeout(() => {      ---เป็นการจำลองการทำงานที่ต้องใช้เวลา 300 ms
            const student = STUDENTS.find((item) => item.id === id);        --- เป็นเช็คเงื่อนไขหาเลข นศ ที่อยู่ใน arrey ถ้าหาเจอจะคืนค่าไปที่ student

            if (!student) {     ---ถ้าไม่ใช่นักศึกษาแสดงไม่พบนักศึกษา
                reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
                return;
            }

            resolve({ ...student });    ---สำเร็จเก็บค่าของนักศึกษาคนนั้นไว้
        }, 300);
    });
}

async function reportSequential() {     ---สร้างฟังก์ชันและFunction นี้ทำงานแบบ Asynchronous และสามารถใช้ await ได้
    const ids = ["6501", "6502", "6503"];      ---กำหนดรหัสที่จะหาข้อมูล
    const startTime = Date.now();       ---เก็บเวลาปัจจุบัน

    for (const id of ids) {     ---เป็นloopที่ทำให้สามารถตรวจคนทุกคนได้และใช้ await ทำให้การตรวจตรวจที่ละคนเเละต้องรอเวลา
        const student = await fetchStudentByIdAsync(id);
        console.log("พบข้อมูลนักศึกษา:", student.name);
    }

    const elapsedTime = Date.now() - startTime;     ---เป็นการเอาเวลาปัจจุบันลบเวลาเริ่มต้น
    console.log(`ใช้เวลาแบบ sequential: ${elapsedTime} ms`);     ---แสดงเวลาที่ใช้แบบ ssequential จะได้ 900 เพราะ เรียกที่ละตัว 300 + 300 + 300
}

async function reportParallel() {       ---สร้างฟังก์ชันและFunction นี้ทำงานแบบ Asynchronous และสามารถใช้ await ได้
    const ids = ["6501", "6502", "6503"];   ---กำหนดรหัสที่จะหาข้อมูล
    const startTime = Date.now();       ---เก็บเวลาปัจจุบัน
    const students = await Promise.all(ids.map((id) => fetchStudentByIdAsync(id))); ---เป็นการเรียกใช้ฟังก์ชัน fetchStudentByIdAsync(id) ด้วย ids และไม่ต้องรอทำทีละตัวทำทีเดียวเลยสามตัวจึงเร็วกว่าและต้องรอ promise ให้เสร็จก่อน

    students.forEach((student) => {     ---เป็นการแสดงชื่อทีละคน
        console.log("พบข้อมูลนักศึกษา:", student.name);
    });

    const elapsedTime = Date.now() - startTime;     ---แสดงเวลาที่ใช้แบบ parallel จะได้ 300 เพราะเรียกใช้ทีเดียว
    console.log(`ใช้เวลาแบบ parallel: ${elapsedTime} ms`);
}

async function safeReport(id) {     ---สร้างฟังก์ชันและFunction นี้ทำงานแบบ Asynchronous และสามารถใช้ await ได้
    try {           
        const student = await fetchStudentByIdAsync(id);        ---ลองค้นหานักศึกษาแบบที่ละคน
        console.log(`พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`);    ---มีนัก นศ คนนี้แสดง พบข้อมูล + เกรด
    } catch (error) {
        console.log(`ตรวจไม่พบ: ${error.message}`);      --- error หรือไม่พบจากฟังก์ชันทำให้ขึ้น error ทำให้แสดงค่า ตรวจไม่พบ  + error message
    } finally {
        console.log(`--- จบการตรวจสอบ ${id} ---`);      ---ทำทุกครั้งไม่ว่า promise จะสำเร็จหรือไม่สำเร็จแสดงจบการตรวจสอบ
    }
}

async function main() {         ---สร้างฟังก์ชันและFunction นี้ทำงานแบบ Asynchronous และสามารถใช้ await ได้
    console.log("=== Sequential ===");  ---แสดงผลแบบ sequential
    await reportSequential();

    console.log("=== Parallel ===");    ---แสดงผลแบบ parallel
    await reportParallel();

    console.log("=== Safe report ===");     ---แสดงผล safe report  การหาข้อมูลของแต่ละรหัส นศ
    await safeReport("6501");
    await safeReport("6599");
}

main().catch((error) => {       ---ใช้ดัก Error ที่อาจหลุดออกมาจาก main  ถ้ามีหลุดมาจะทำให้แสดงผล เกิดข้อผิดพลาดทันที
    console.log("เกิดข้อผิดพลาดใน main:", error.message);
});

// 1 try-catch ต้องครอบ await เพราะเมื่อ Promise ที่รอด้วย await
//    เกิด reject, await จะโยน error ออกมาเป็น exception
//    ทำให้ catch สามารถจับ error นั้นได้
// 2 Promise.all() ใช้รอหลาย Promise พร้อมกัน
//    ต้องสร้าง Promise ทั้งหมดก่อน แล้วจึง await Promise.all()
//    ทำให้ทั้ง 3 งานทำงานพร้อมกันและใช้เวลาประมาณ 300 ms

4 ex4-combinators=========================================================================================================================================

const wait = (ms, value, willFail = false) => new Promise((resolve, reject) => {        ---สร้างตัวแปร wait และ ถ้าไม่ส่งค่า willfail จะถือว่าสำเร็จเพราะ = false และยังคืนค่า promise สำเร็จและไม่สำเร็จ
	setTimeout(() => {      ---จำลองการทำงานที่ต้องใช้เวลา
		if (willFail) {     ---เงื่อนไขตรวจว่า willFail เป็น true หรือไม่
			reject(new Error(`${value} ล้มเหลว`));   ---ถ้าเป็น true ให้แสดง ล้มเหลว
			return;
		}

		resolve(value); ---ถ้าเป็น false เท่ากับสำเร็จ
	}, ms);
});

function timeoutPromise(ms) {   ---สร้่างฟังก์ชัน
	return new Promise((resolve, reject) => { ---คืนค่า promise
		setTimeout(() => reject(new Error(`หมดเวลาเกิน ${ms} ms`)), ms);     ---รอ ms แล้ว reject แน่นอน
	});
}

async function runAll() {       ---สร้าง Async Function ชื่อ runAll
	const startTime = Date.now();   ---เก็บเวลาปัจจุบันตอนเริ่ม
	const [file, report, announcement] = await Promise.all([       ---file, report, announcement ต้องสำเร็จทุกอัน
		wait(300, "โหลดไฟล์สำเร็จ"),
		wait(400, "อ่านรายงานสำเร็จ"),     ---ทั้ง 3 งานเริ่มทำ พร้อมกัน
		wait(200, "ประกาศสำเร็จ")
	]);

	console.log("all: ทุกงานสำเร็จ", { file, report, announcement });  ---แสดงผลลัพธ์ของทั้ง 3 งาน
	console.log(`all ใช้เวลา ${Date.now() - startTime} ms`);          ---เอาเวลาปัจจุบันลบเวลาเริ่มต้น
}

async function runAllSettled() {         ---สร้าง Async Function
	const results = await Promise.allSettled([      ---รอทุกงาน และรายงานผลทุกงานไม่สนใจว่าจะสำเร็จหรือล้มเหลว
		wait(300, "อีเมลส่งสำเร็จ"),
		wait(500, "SMS ส่งไม่สำเร็จ", true),
		wait(400, "แอปส่งสำเร็จ")
	]);

	results.forEach((result, index) => {        ---วนดูผลลัพธ์ทีละตัว
		const channel = ["อีเมล", "SMS", "แอป"][index];  ---เอา index ไปเลือกชื่อช่องทาง
		if (result.status === "fulfilled") {        --- ตรวจว่าสำเร็จหรือไม่
			console.log(`allSettled ${channel}: สำเร็จ - ${result.value}`);   ---สำเร็จแสดง ส่งสำเร็จ
		} else {
			console.log(`allSettled ${channel}: ล้มเหลว - ${result.reason.message}`);    ---ไม่สำเร็จแสดง ล้มเหลว + error message
		}
	});
}

async function runAny() {       ---สร้าง Async Function
	try {
		const result = await Promise.any([      ---อา Promise ตัวแรกที่สำเร็จ
			wait(300, "mirror-A", true),    ---ไม่สำเร็จเพราะเป็น true
			wait(600, "mirror-B")       ---ไม่สำเร็จเพราะเป็น false
		]);
		console.log("any: ได้ข้อมูลตัวแรกที่สำเร็จจาก", result);     ---แสดงค่าข้อมูลตัวแรกที่สำเร็จ
	} catch (error) {
		console.log("any: ทุกแหล่งล้มเหลว", error.errors);     ---ถ้าทุก Promise ล้มเหลว จะเกิด AggregateError  error.errors จะเก็บ Error ของทุกตัว
	}
}

async function runRace() {      ---สร้าง Async Function
	try {   ---ลองทำพร้อมดัก error
		const result = await Promise.race([     ---เอา Promise ที่เสร็จเป็นตัวแรก ไม่ว่าจะสำเร็จหรือล้มเหลว
			wait(1200, "ค้นหาฐานข้อมูลสำเร็จ"),  ---ใช้เวลา 1200 ms แล้วสำเร็จ
			timeoutPromise(800)     ---ใช้เวลา 800 ms แล้ว reject
		]);
		console.log("race: ได้ผลลัพธ์", result);
	} catch (error) {
		console.log("race: เกิน 800ms จึงใช้ค่าทดแทน", error.message);  --- แสดงค่า
	}
}

async function main() {     ---เป็น Function หลัก
	console.log("=== Promise.all: ต้องสำเร็จทุกงาน ===");   ---แสดงหัวข้อ แล้วเรียก runAll()
	await runAll();

	console.log("=== Promise.allSettled: รายงานผลทุกช่องทาง ===");  ---จากนั้นทำ allSettled
	await runAllSettled();

	console.log("=== Promise.any: เอาผลสำเร็จตัวแรก ==="); ---จากนั้นทำ any
	await runAny();

	console.log("=== Promise.race: จำกัดเวลา ===");     ---สุดท้ายทำ race
	await runRace();
}

main().catch((error) => {       ---เรียก main()ถ้าเกิด Error ที่หลุดออกมาจาก main() ให้จับตรงนี้
	console.log("เกิดข้อผิดพลาดใน main:", error.message);   ---แสดงข้อความ Error
});

// all เหมาะกับงานที่ต้องสำเร็จครบทุกงาน ถ้างานใด reject จะ reject ทั้งชุด
// allSettled เหมาะกับงานที่ต้องรู้ผลของทุกงาน แม้บางงานจะล้มเหลว
// any เหมาะกับ mirror เพราะต้องการข้อมูลจากแหล่งแรกที่สำเร็จ
// race เหมาะกับ timeout เพราะใช้ผลลัพธ์ของ Promise ที่เสร็จก่อน
