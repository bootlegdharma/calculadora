let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
function appendNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
}
function appendOperator(operator) {
  if (currentInput === "" && operator !== ".") return;
  currentInput += operator;
  display.textContent = currentInput;

  function calculate() {
    try {
      const cleanInput = currentInput.replace(/[^0-9+\-*/.()%]/g, "");
      if (!cleanInput) {
        throw new Error("Input inválido");
      }
      let result = new Function(`return(${cleanInput})`)();
      if (!Number.isInteger(result)) {
        result = result.toFixed(2);
      }
      currentInput = result;
      display.textContent = currentInput;
    } catch (error) {
      display.textContent = "Erro";
      currentInput = "";
    }
  }
}
