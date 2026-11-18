const menu = [
  { name: "Burger", price: 150 },
  { name: "Pizza", price: 300 },
  { name: "Pasta", price: 220 },
  { name: "Fries", price: 100 },
  { name: "Coke", price: 60 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const foundItem = menu.find(
      (menuItem) => menuItem.name.toLowerCase() === itemName.toLowerCase()
    );
    if (!foundItem) {
      throw new Error(`Invalid item ordered: "${itemName}" is not on the menu.`);
    }
    return foundItem.price;
  });

  const total = prices.reduce((sum, price) => sum + price, 0);
  return total;
}

const outputDiv = document.getElementById("output");

function processOrder(order) {
  const p = document.createElement("p");
  try {
    const totalBill = calculateBill(order);
    const message = `Order: [${order.join(", ")}] | Total Bill: ₹${totalBill}`;
    console.log(message);
    p.textContent = message;
  } catch (error) {
    const errorMessage = `Order: [${order.join(", ")}] | Error: ${error.message}`;
    console.error(errorMessage);
    p.textContent = errorMessage;
  }
  outputDiv.appendChild(p);
}

processOrder(["Burger", "Fries", "Coke"]);
processOrder(["Pizza", "Sushi"]);