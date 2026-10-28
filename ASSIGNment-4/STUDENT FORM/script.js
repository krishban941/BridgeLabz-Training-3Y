
"use strict";

document.body.innerHTML = `
    <h2>Student Registration Form</h2>
    <form id="studentForm">
        <input name="name" placeholder="Name" required>
        <p id="nameError"></p>

        <input name="email" placeholder="Email" required>
        <p id="emailError"></p>

        <input name="phone" placeholder="Phone" required>
        <p id="phoneError"></p>

        <input name="password" type="password" placeholder="Password" required>
        <p id="passwordError"></p>

        <button type="submit">Register</button>
    </form>
    <p id="result"></p>
`;

const form = document.getElementById("studentForm");

const rules = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, number and special character."
};

function validateField(field) {
    const input = form.elements[field];
    const error = document.getElementById(field + "Error");
    const isValid = rules[field].test(input.value.trim());

    input.style.border = isValid ? "2px solid green" : "2px solid red";
    error.textContent = isValid ? "" : messages[field];
    error.style.color = "red";

    return isValid;
}

for (const field of Object.keys(rules)) {
    form.elements[field].addEventListener("input", () => {
        validateField(field);
    });
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const isValid = Object.keys(rules)
        .map(validateField)
        .every(Boolean);

    document.getElementById("result").textContent = isValid
        ? "Registration successful!"
        : "Please correct the errors.";
});