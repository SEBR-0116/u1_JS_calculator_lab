const allButtons = document.querySelectorAll('.buttons')
const screen = document.querySelector('.cal-screen')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.total')
const clear = document.querySelector('.clear')

let value = ['C', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']

let runningTotal = ''
let mathOperator = ['+/-', '%', '/', '*', '-', '+']
let erase = 'C'
let previousInput = ''
let currentInput = ''
let operator = ''

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function (event) {
    const clickedValue = event.target.innerHTML
    if (value.includes(clickedValue)) {
      handleNumericInput(clickedValue)
    }
  })
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function (event) {
    const doMath = event.target.innerHTML
    if (mathOperator.includes(doMath)) {
      handleOperatorInput(doMath)
    }
  })
}

clear.addEventListener('click', function (event) {
  if (value.includes('C')) {
    screen.textContent = ''
    previousInput = ''
    currentInput = ''
    operator = ''
  }
})

equals.addEventListener('click', function (event) {
  if (runningTotal !== '') {
    performCalculation()
  }
})

function handleNumericInput(value) {
  currentInput += value
  updateScreen()
}

function handleOperatorInput(operator) {
  if (currentInput !== '') {
    if (runningTotal !== '') {
      performCalculation()
    }
    previousInput = currentInput
    currentInput = ''
    runningTotal = operator
    updateScreen()
  }
}

function performCalculation() {
  const expression = `${previousInput}${runningTotal}${currentInput}`
  const result = new Function(`return ${expression}`)()
  currentInput = result.toString()
  runningTotal = ''
  updateScreen()
}

function updateScreen() {
  screen.textContent = currentInput || '0'
}
