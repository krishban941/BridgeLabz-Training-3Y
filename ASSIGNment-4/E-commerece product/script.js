
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Headphones", 2500, "Electronics")
];

products[0].applyDiscount(10);

for (const product of products) {
    console.log(product.displayDetails());
}

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products above ₹1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});