const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let operand1 = null;

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let value = e.target.getAttribute("value");

    if (value === "=") {
      if (operand1 !== null && operator !== "" && currentInput !== "") {
        let operand2 = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand2 !== 0 ? operand1 / operand2 : "Error"; // Hindari pembagian nol
            break;
        }
        display.textContent = result;
        currentInput = result.toString();
        operator = "";
        operand1 = null;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput !== "") {
        operand1 = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      }
    } else if (value === "c") {
      // Reset semua nilai
      currentInput = "";
      operator = "";
      operand1 = null;
      display.textContent = "0";
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
}
