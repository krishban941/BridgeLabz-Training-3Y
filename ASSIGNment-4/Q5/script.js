
"use strict";

document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>
    <form id="bookingForm">
        <input name="name" placeholder="Full Name" required>
        <p id="nameError"></p>

        <input name="email" type="email" placeholder="Email" required>
        <p id="emailError"></p>

        <input name="seats" type="number" placeholder="Seats (1-10)" min="1" max="10" required>
        <p id="seatsError"></p>

        <button type="submit">Book Ticket</button>
    </form>
    <div id="ticket"></div>
`;

const form = document.getElementById("bookingForm");

const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const seats = Number(form.elements.seats.value);

    let valid = true;

    document.getElementById("nameError").textContent =
        namePattern.test(name) ? "" : "Enter alphabets only.";

    document.getElementById("emailError").textContent =
        emailPattern.test(email) ? "" : "Enter a valid email.";

    document.getElementById("seatsError").textContent =
        Number.isInteger(seats) && seats >= 1 && seats <= 10
            ? ""
            : "Seats must be between 1 and 10.";

    valid =
        namePattern.test(name) &&
        emailPattern.test(email) &&
        Number.isInteger(seats) &&
        seats >= 1 &&
        seats <= 10;

    if (!valid) {
        return;
    }

    const booking = { name, email, seats };

    document.getElementById("ticket").innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log(booking);
});