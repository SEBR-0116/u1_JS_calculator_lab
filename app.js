let displayValue = '';

function ToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = displayValue.replace(/cos/g, 'Math.cos').replace(/sin/g, 'Math.sin').replace(/tan/g, 'Math.tan');
    displayValue = eval(displayValue).toString();
    displayValue = displayValue.replace(/%/g, '/100');
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('output').value = displayValue;
}

function toggleSign() {
    // Toggle the positive/negative sign of the current input
    if (displayValue.charAt(0) === '-') {
      displayValue = displayValue.slice(1); // Remove the negative sign
    } else {
      displayValue = '-' + displayValue; // Add a negative sign
    }
    updateDisplay();
  }