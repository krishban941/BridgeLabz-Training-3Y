class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Dataset cannot be empty.");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter((entry) => entry.steps > 7000);
  }

  getAverageCalories() {
    const totalCalories = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return totalCalories / this.data.length;
  }

  getUserSummary() {
    return this.data.map(
      (entry) => `User ${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`
    );
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

const outputDiv = document.getElementById("output");

function appendOutput(text) {
  console.log(text);
  const p = document.createElement("p");
  p.textContent = text;
  outputDiv.appendChild(p);
}

try {
  const analytics = new FitnessAnalytics(workoutData);

  const activeUsers = analytics.getActiveUsers().map((u) => u.user).join(", ");
  appendOutput(`Active Users (>7000 steps): ${activeUsers}`);

  const avgCalories = analytics.getAverageCalories().toFixed(2);
  appendOutput(`Average Calories Burned: ${avgCalories}`);

  const summaries = analytics.getUserSummary();
  summaries.forEach((msg) => appendOutput(msg));

  const emptyAnalytics = new FitnessAnalytics([]);
} catch (error) {
  appendOutput(`Error: ${error.message}`);
}