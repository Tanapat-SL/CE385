function    getMenuPrice(menu) {
  switch (menu) {
    case "ข้าวผัด": return 50;
    case "ผัดไทย": return 60;
    case "ต้มยำกุ้ง": return 120;
    case "ข้าวมันไก่": return 50;
    case "ข้าวหมูแดง": return 50;
    default:  return 0;
  }
}
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา": return 1;
        case "พิเศษ": return 1.5;
        case "จัมโบ้": return 2 ;
        default: return 1;
    }
}
const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวหมูแดง", size: "ธรรมดา", qty: 3 },
    { menu: "ส้มตำ", size: "พิเศษ", qty: 1 } 
];

let total = 0;

for (const order of orders) {
    let price;

    // กำหนดราคาเมนู
    switch (order.menu) {
        case "ผัดไทย":
            price = 50;
            break;

        case "ข้าวหมูแดง":
            price = 50;
            break;

        case "ต้มยำกุ้ง":
            price = 120;
            break;

        case "ข้าวผัด":
            price = 50;
            break;

        case "ข้าวมันไก่":
            price = 50;
            break;

        default:
            price = 0;
            console.log(`ไม่พบเมนู: ${order.menu}`);
    }

    // ตัวคูณขนาด
    let sizeMultiplier;

    switch (order.size) {
        case "ธรรมดา":
            sizeMultiplier = 1;
            break;

        case "พิเศษ":
            sizeMultiplier = 1.5;
            break;

        case "จัมโบ้":
            sizeMultiplier = 2 ;
            break;

        default:
            sizeMultiplier = 1;
    }

    const itemTotal = price * sizeMultiplier * order.qty;

    console.log(
        `${order.menu} (${order.size}) x ${order.qty} = ${itemTotal.toFixed(2)} บาท`
    );

    total += itemTotal;
}

console.log(`ราคารวมทั้งบิล = ${total.toFixed(2)} บาท`);
