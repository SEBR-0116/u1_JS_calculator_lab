let inputDisplay = "0"
let resultDisplay = false


//Functions
function changeDisplay(value) {
    if (inputDisplay = "0" || resultDisplay) {
        inputDisplay = value
    } else {
        inputDisplay += value
    }
    resultDisplay = false
    updateDisplay()
}

function updateDisplay() {
    const display = document.getElementById("display")
    display.textContent = inputDisplay
}

function calcResult() {
    try {
        const result = eval(inputDisplay)
        inputDisplay += "\n=" + result.toString()
        updateDisplay()
    } catch (error) {
    inputDisplay += "\nError"
    updateDisplay()
}

resultDisplay = true
}
function cleaLastElement() {
    currentDisplay = currentDisplay.slice(0,-1)
    if (inputDisplay === "") {
        inputDisplay = "0"
    }
    updateDisplay()
}
function clearDisplay() {
    inputDisplay = "0"
    resultDisplay = false
    updateDisplay()
}