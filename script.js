
// GLOBAL VARIABLES
let result = 0
let previousResult = ""
let storedOperation = ""
let isSecondOperand = false

const validCharacters = ['0','1','2','3','4','5','6','7','8','9','0','.']

// HTML Elements
const resultText = document.querySelector('#result')
const previousResultText = document.querySelector('#previousOperation')
const buttons = document.querySelectorAll('td')

// Functions

const resetCalculator = () => {
    resultText.value = 0
    previousResultText.innerHTML = 0
    result = 0
    previousResult = 0
    isSecondOperand = false
}

const binaryOperation = (binaryOperator, input = 0) => {
    previousResult = result
    result = input
    storedOperation = `${previousResult} ${binaryOperator} ${result}`
    previousResultText.innerHTML = storedOperation
    isSecondOperand = true
}

const inputNumber = () => {
    if ([...resultText.value].every(character => validCharacters.some((number) => number == character))) {
        // If a valid character has been typed
        storedOperation = resultText.value
    } else {
        resultText.value = resultText.value.slice(0, -1)
    }
    
    // Adds logic to 0 and dots
    if (resultText.value[0] == "0" && resultText.value.length > 1 && resultText.value[1] != '.') {
        resultText.value = resultText.value.slice(1)
        if (resultText.value == '.') {
            resultText.value = '0.'
        }
        storedOperation = resultText.value
    }

    if (resultText.value.length === 0) {
        resultText.value = "0"
        storedOperation = resultText.value
    } 

    // Updates result and updates the text above result
    result = resultText.value
    previousResultText.innerHTML = storedOperation
}

// Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (!isSecondOperand) {
                resultText.value += button.innerHTML
                previousResultText.innerHTML += button.innerHTML
                inputNumber()
            }
        } else if (button.className == 'basicOperator' || button.className == 'advancedOperator') {
            switch (button.id) {
                case 'ac':
                    resetCalculator()
                    break;
                case 'plus':
                    binaryOperation('+', 0)
                    
                    break;

            }
        }
    })
})

resultText.addEventListener('input', () => {
    inputNumber()
})
