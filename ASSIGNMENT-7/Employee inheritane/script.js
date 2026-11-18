class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is performing general tasks in ${this.department}.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} is managing a team of ${this.teamSize} members in ${this.department}.`;
  }
}

const employees = [
  new Employee("Amit", "Engineering"),
  new Manager("Neha", "Product", 5),
  new Employee("Rohan", "Marketing")
];

const outputDiv = document.getElementById("output");

employees.forEach((emp) => {
  const result = emp.work();
  console.log(result);

  const p = document.createElement("p");
  p.textContent = result;
  outputDiv.appendChild(p);
});