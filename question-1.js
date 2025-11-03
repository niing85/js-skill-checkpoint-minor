// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้
  for(let order in orders){
    
    let message = ""
    if (orders[order].total >=6000) {
      message = "Shipping is free."
    } else if(orders[order].total >= 3000){
      message = "Shipping cost is 250 Baht."
    }else{
      message = "Shipping cost is 500 Baht."
    }

    console.log(`Order Id ${orders[order].orderId}: ${message}`)
  }
  
return
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

calculateShippingCost(orders);
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
