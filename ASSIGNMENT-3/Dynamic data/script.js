
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const rejected =
        value === "NaN" ||
        value === " " ||
        value === "100px" ||
        Number.isNaN(numberValue);

    console.log("Original:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    if (rejected) {
        invalid.push(value);
        console.log("Status: Invalid");
    } else {
        valid.push(numberValue);
        console.log("Status: Valid");
    }

    console.log("--------------------");
}

console.log("Valid numeric data:", valid);
console.log("Invalid data:", invalid);
console.log("Valid count:", valid.length);
console.log("Invalid count:", invalid.length);