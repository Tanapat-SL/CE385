const wait = (ms, value, willFail = false) => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (willFail) {
			reject(new Error(`${value} ล้มเหลว`));
			return;
		}

		resolve(value);
	}, ms);
});

function timeoutPromise(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`หมดเวลาเกิน ${ms} ms`)), ms);
	});
}

async function runAll() {
	const startTime = Date.now();
	const [file, report, announcement] = await Promise.all([
		wait(300, "โหลดไฟล์สำเร็จ"),
		wait(400, "อ่านรายงานสำเร็จ"),
		wait(200, "ประกาศสำเร็จ")
	]);

	console.log("all: ทุกงานสำเร็จ", { file, report, announcement });
	console.log(`all ใช้เวลา ${Date.now() - startTime} ms`);
}

async function runAllSettled() {
	const results = await Promise.allSettled([
		wait(300, "อีเมลส่งสำเร็จ"),
		wait(500, "SMS ส่งไม่สำเร็จ", true),
		wait(400, "แอปส่งสำเร็จ")
	]);

	results.forEach((result, index) => {
		const channel = ["อีเมล", "SMS", "แอป"][index];
		if (result.status === "fulfilled") {
			console.log(`allSettled ${channel}: สำเร็จ - ${result.value}`);
		} else {
			console.log(`allSettled ${channel}: ล้มเหลว - ${result.reason.message}`);
		}
	});
}

async function runAny() {
	try {
		const result = await Promise.any([
			wait(300, "mirror-A", true),
			wait(600, "mirror-B")
		]);
		console.log("any: ได้ข้อมูลตัวแรกที่สำเร็จจาก", result);
	} catch (error) {
		console.log("any: ทุกแหล่งล้มเหลว", error.errors);
	}
}

async function runRace() {
	try {
		const result = await Promise.race([
			wait(1200, "ค้นหาฐานข้อมูลสำเร็จ"),
			timeoutPromise(800)
		]);
		console.log("race: ได้ผลลัพธ์", result);
	} catch (error) {
		console.log("race: เกิน 800ms จึงใช้ค่าทดแทน", error.message);
	}
}

async function main() {
	console.log("=== Promise.all: ต้องสำเร็จทุกงาน ===");
	await runAll();

	console.log("=== Promise.allSettled: รายงานผลทุกช่องทาง ===");
	await runAllSettled();

	console.log("=== Promise.any: เอาผลสำเร็จตัวแรก ===");
	await runAny();

	console.log("=== Promise.race: จำกัดเวลา ===");
	await runRace();
}

main().catch((error) => {
	console.log("เกิดข้อผิดพลาดใน main:", error.message);
});

// all เหมาะกับงานที่ต้องสำเร็จครบทุกงาน ถ้างานใด reject จะ reject ทั้งชุด
// allSettled เหมาะกับงานที่ต้องรู้ผลของทุกงาน แม้บางงานจะล้มเหลว
// any เหมาะกับ mirror เพราะต้องการข้อมูลจากแหล่งแรกที่สำเร็จ
// race เหมาะกับ timeout เพราะใช้ผลลัพธ์ของ Promise ที่เสร็จก่อน
