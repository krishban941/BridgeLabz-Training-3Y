function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

const product1 = new Product("Laptop", 60000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Smartphone", 25000);

const items = [
  { product: product1, discount: 10 },
  { product: product2, discount: 25 },
  { product: product3, discount: 15 }
];

const outputDiv = document.getElementById("output");

items.forEach(({ product, discount }) => {
  const finalPrice = product.applyDiscount(discount);
  const message = `${product.name} | Original: ₹${product.price} | Discount: ${discount}% | Final Price: ₹${finalPrice}`;
  
  console.log(message);
  
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
});