
// GLOBAL VARIABLES
let result = 0
let storedOperation = ""
let firstOperand = ""
let binaryOperator = ""
let secondOperand = ""
let isSecondOperand = false
let isBinaryOperation = false

const validCharacters = ['0','1','2','3','4','5','6','7','8','9','0','.']

// HTML Elements
const resultText = document.querySelector('#result')
const storedOperationText = document.querySelector('#previousOperation')
const buttons = document.querySelectorAll('td')

// Functions

const resetCalculator = () => {
    resultText.value = 0
    result = 0
    isSecondOperand = false
    firstOperand = ""
    secondOperand = ''
    binaryOperator = ''
    updateStoredOperation()
}

const updateStoredOperation = () => {
    storedOperation = `${firstOperand} ${binaryOperator} ${secondOperand}`
    storedOperationText.innerHTML = storedOperation
}

const binaryOperation = (sign) => {
    binaryOperator = sign
    result = 0
    resultText.value = 0
    isSecondOperand = true
    isBinaryOperation = true
}

const evaluateOperation = () => {
    const expression = storedOperationText.innerHTML.split(' ')
    try {
        if (expression.length < 2 || expression.length > 3) {
            throw "Expression does not have a valid amount of operands"
        }
        expression.forEach((operand) => {operand.toString()})

        switch (binaryOperator) {
            case '+':
                result = parseFloat(expression[0]) + parseFloat(expression[2])
                break;
            case '-':
                result = expression[0] - expression[2]
        }

        isBinaryOperation = false
        isSecondOperand = false

        resultText.value = result

    } catch (e) {
        console.error(e)
        alert(e)
        resetCalculator()
    }
}

const inputNumber = () => {
    if ([...resultText.value].every(character => validCharacters.some((number) => number == character))) {
        // If a valid character has been typed
        result = resultText.value
    } else {
        resultText.value = resultText.value.slice(0, -1)
    }
    
    // Adds logic to 0 and dots
    if (resultText.value[0] == "0" && resultText.value.length > 1 && resultText.value[1] != '.') {
        resultText.value = resultText.value.slice(1)
        if (resultText.value == '.') {
            resultText.value = '0.'
        }
    }

    if (resultText.value.length === 0) {
        resultText.value = "0"
    } 

    // Updates result and updates the text above result
    result = resultText.value
    isSecondOperand ? secondOperand = result : firstOperand = result
    updateStoredOperation()
}

// Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            resultText.value += button.innerHTML
            //previousResultText.innerHTML += button.innerHTML
            inputNumber()
        } else if (button.className == 'basicOperator' || button.className == 'advancedOperator') {
            switch (button.id) {
                case 'ac':
                    resetCalculator()
                    break;
                case 'plus' || 'minus' || 'modulo':
                    binaryOperation(button.innerHTML)
                    break;
                case 'equals':
                    evaluateOperation()
                    break;


            }
        }
        updateStoredOperation()
    })
})

resultText.addEventListener('input', () => {
    inputNumber()
})
