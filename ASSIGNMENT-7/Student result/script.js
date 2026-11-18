class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  calculateAverage() {
    if (this.marks.length === 0) return 0;

    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();

    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [92, 88, 95, 91]),
  new Student("Priya", [78, 82, 74, 80]),
  new Student("Rahul", [42, 48, 39, 45])
];

const outputDiv = document.getElementById("output");

students.forEach((student) => {
  const average = student.calculateAverage().toFixed(2);
  const grade = student.getGrade();

  // Print to browser console
  console.log(`Name: ${student.name} | Average: ${average} | Grade: ${grade}`);

  // Render on the HTML page
  const p = document.createElement("p");
  p.textContent = `Name: ${student.name} | Marks: [${student.marks.join(", ")}] | Average: ${average} | Grade: ${grade}`;
  outputDiv.appendChild(p);
});