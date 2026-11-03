
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_PROPERTY");
        }

        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new Error("INVALID_AMOUNT");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalid.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid transaction:", error.message);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);