class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || typeof this.distance !== "number" || this.distance < 0) {
      throw new Error("Invalid distance: Distance must be a non-negative number.");
    }
    const baseFare = 30;
    const ratePerKm = 12;
    return baseFare + this.distance * ratePerKm;
  }
}

const driver1 = new Driver("Vikram", 4.8, "Swift Dzire - UP16 AB 1234");
const trip1 = new Trip("Sector 62", "Sector 18", 10);
const trip2 = new Trip("Airport", "Railway Station", -5);
const trip3 = new Trip("Mall", "University");

const trips = [trip1, trip2, trip3];
const outputDiv = document.getElementById("output");

const driverInfo = document.createElement("p");
driverInfo.textContent = `Driver: ${driver1.name} | Rating: ${driver1.rating} | Vehicle: ${driver1.vehicleDetails}`;
outputDiv.appendChild(driverInfo);

trips.forEach((trip) => {
  const p = document.createElement("p");
  try {
    const fare = trip.calculateFare();
    const message = `Trip: ${trip.fromLocation} to ${trip.toLocation} (${trip.distance} km) | Fare: ₹${fare}`;
    console.log(message);
    p.textContent = message;
  } catch (error) {
    const errorMessage = `Trip: ${trip.fromLocation} to ${trip.toLocation} | Error: ${error.message}`;
    console.error(errorMessage);
    p.textContent = errorMessage;
  }
  outputDiv.appendChild(p);
});