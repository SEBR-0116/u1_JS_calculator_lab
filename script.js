
// GLOBAL VARIABLES
let result = 0
let storedOperation = ""
let firstOperand = ""
let binaryOperator = ""
let secondOperand = ""
let isSecondOperand = false
let isBinaryOperation = false

const validCharacters = ['0','1','2','3','4','5','6','7','8','9','0','.','π','ℇ']

// HTML Elements
const resultText = document.querySelector('#result')
const storedOperationText = document.querySelector('#previousOperation')
const buttons = document.querySelectorAll('td')

// Functions

const resetCalculator = () => {
    resultText.value = 0
    result = 0
    isSecondOperand = false
    firstOperand = '0'
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

const parseToNumber = (number) => {
    if (number === 'π') {
        return Math.PI
    } else if (number === 'ℇ') {
        return Math.E
    } else {
        return parseFloat(number)
    }
}

const evaluateOperation = () => {
    const expression = storedOperationText.innerHTML.split(' ')
    try {
        if (expression.length > 3) {
            throw "Expression does not have a valid amount of operands"
        }

        //Turn the expression into an array of strings
        expression.forEach((operand) => {
            operand.toString()
        })

        if (isBinaryOperation) {
            switch (binaryOperator) {
                case '+':
                    result = parseToNumber(expression[0]) + parseToNumber(expression[2])
                    break;
                case '-':
                    result = parseToNumber(expression[0]) - parseToNumber(expression[2])
                    break;
                case '×':
                    result = parseToNumber(expression[0]) * parseToNumber(expression[2])
                    break;
                case '÷':
                    result = parseToNumber(expression[0]) / parseToNumber(expression[2])
                    break;
                case '%':
                    result = parseToNumber(expression[0]) % parseToNumber(expression[2])
                    break;
                case '^':
                    result = parseToNumber(expression[0]) ** parseToNumber(expression[2])
                    break;
                default:
                    throw "An error has occurred. Please try again..."
                
            }
        }
        
        //Resets the necessary Parts of the calculator
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
        // Makes sure user does not type invalid characters
        resultText.value = resultText.value.slice(0, -1)
    }
    
    // Adds logic for dots
    if (resultText.value[0] == "0" && resultText.value.length > 1 && resultText.value[1] != '.') {
        resultText.value = resultText.value.slice(1)
        if (resultText.value == '.') {
            resultText.value = '0.'
        }
    }

    // Makes sure that at least 0 is always displayed at the calculator
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
            //What the computer will do when a number is typed
            resultText.value += button.innerHTML
            inputNumber()
        } else if (button.className == 'basicOperator' || button.className == 'advancedOperator') {
            console.log(button.id)

            // Adds logic for basic and advanced operators
            if (['plus','minus','divide','multiply','power','modulo'].some(id => id === button.id)) {
                binaryOperation(button.innerHTML)
            } else if (button.id === 'ac') {
                resetCalculator()
            } else if (button.id === 'equals') {
                evaluateOperation()
            }

        }

        //Updates operation
        updateStoredOperation()
    })
})

resultText.addEventListener('input', () => {
    inputNumber()
})
