const currentOperandElement = document.querySelector("[data-current-operand]");
const previousOperandElement = document.querySelector("[data-previous-operand]");
const keysElement = document.querySelector(".keys");

let currentInput = "0";
let previousValue = null;
let operator = null;
let waitingForOperand = false;
let hasError = false;

function render() {
  currentOperandElement.textContent = currentInput;
  previousOperandElement.textContent =
    previousValue !== null && operator
      ? `${formatNumber(previousValue)} ${operatorSymbol(operator)}`
      : "";
}

function formatNumber(value) {
  return Number(value.toPrecision(10)).toString();
}

function operatorSymbol(value) {
  return { "/": "÷", "*": "×", "-": "−", "+": "+" }[value];
}

function enterDigit(digit) {
  if (hasError || waitingForOperand) {
    currentInput = digit;
    waitingForOperand = false;
    hasError = false;
  } else if (currentInput === "0") {
    currentInput = digit;
  } else if (currentInput.length < 16) {
    currentInput += digit;
  }
  render();
}

function enterDecimal() {
  if (hasError || waitingForOperand) {
    currentInput = "0.";
    waitingForOperand = false;
    hasError = false;
  } else if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  render();
}

function calculate(left, right, operation) {
  switch (operation) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return right === 0 ? null : left / right;
    default:
      return right;
  }
}

function chooseOperator(nextOperator) {
  if (hasError) {
    clearCalculator();
    return;
  }

  const inputValue = Number(currentInput);
  if (operator && !waitingForOperand) {
    const result = calculate(previousValue, inputValue, operator);
    if (result === null || !Number.isFinite(result)) {
      showError();
      return;
    }
    currentInput = formatNumber(result);
    previousValue = result;
  } else {
    previousValue = inputValue;
  }

  operator = nextOperator;
  waitingForOperand = true;
  render();
}

function showError() {
  currentInput = "Cannot divide by 0";
  previousValue = null;
  operator = null;
  waitingForOperand = true;
  hasError = true;
  render();
}

function equals() {
  if (!operator || previousValue === null || waitingForOperand || hasError) {
    return;
  }

  const result = calculate(previousValue, Number(currentInput), operator);
  if (result === null || !Number.isFinite(result)) {
    showError();
    return;
  }

  currentInput = formatNumber(result);
  previousValue = null;
  operator = null;
  waitingForOperand = true;
  render();
}

function clearCalculator() {
  currentInput = "0";
  previousValue = null;
  operator = null;
  waitingForOperand = false;
  hasError = false;
  render();
}

function deleteDigit() {
  if (hasError) {
    clearCalculator();
    return;
  }
  if (!waitingForOperand) {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  }
  render();
}

function percent() {
  if (hasError) {
    clearCalculator();
    return;
  }
  currentInput = formatNumber(Number(currentInput) / 100);
  waitingForOperand = false;
  render();
}

keysElement.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.digit !== undefined) {
    enterDigit(button.dataset.digit);
  } else if (button.dataset.operator) {
    chooseOperator(button.dataset.operator);
  } else {
    switch (button.dataset.action) {
      case "clear":
        clearCalculator();
        break;
      case "delete":
        deleteDigit();
        break;
      case "decimal":
        enterDecimal();
        break;
      case "equals":
        equals();
        break;
      case "percent":
        percent();
        break;
      default:
        break;
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (/^\d$/.test(event.key)) {
    enterDigit(event.key);
  } else if (event.key === ".") {
    enterDecimal();
  } else if (["+", "-", "*", "/"].includes(event.key)) {
    chooseOperator(event.key);
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    equals();
  } else if (event.key === "Backspace") {
    deleteDigit();
  } else if (event.key === "Escape") {
    clearCalculator();
  } else if (event.key === "%") {
    percent();
  }
});

render();