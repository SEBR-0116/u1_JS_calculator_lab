// Global variables
const display = document.querySelector('#display')
let runningTotal = 0
const inputs = document.querySelectorAll('.inputs')
const reset = document.querySelector('#reset')
let previousKey = ''
let operator = ''

// Functions

const calculate = () => {
    if (operator === 'add') {
        runningTotal = runningTotal + parseFloat(display.innerText)
    } else if (operator === 'subtract') {
        runningTotal = runningTotal - parseFloat(display.innerText)
    } else if (operator === 'multiply') {
        runningTotal = runningTotal * parseFloat(display.innerText)
    } else if (operator === 'divide') {
        runningTotal = runningTotal / parseFloat(display.innerText)
    }
    display.innerText = runningTotal
    previousKey = 'operator'
    operator = ''
    runningTotal = 0
}

// Event Listeners

for(let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', e => {
        const key = e.target
        const action = key.dataset.action
        const keyText = key.innerText

        // number keys
        if (!action) {
            if (display.innerText === '0' || previousKey === 'operator') {
                display.innerText = keyText
                previousKey = 'number'
            } else if (previousKey === 'number') {
                display.innerText = display.innerText + keyText
            }
        }
        if (action==='decimal') {
            if (display.innerText.includes('.')) {
                return
            } else if (previousKey === 'operator') {
                display.innerText = '0.'
                previousKey = 'number'
            } else {
                display.innerText = display.innerText + '.'
            }
        }

        // operator keys
        if (action === 'add') {
            if (previousKey === 'operator' ) {
                return
            } else if (operator === 'add') {
                runningTotal = runningTotal + parseFloat(display.innerText)
            } else if (operator === 'subtract') {
                runningTotal = runningTotal - parseFloat(display.innerText)
            } else if (operator === 'multiply' ) {
                runningTotal = runningTotal * parseFloat(display.innerText)
            } else if (operator === 'divide' ) {
                runningTotal = runningTotal / parseFloat(display.innerText)
            } else {
            runningTotal = runningTotal + parseFloat(display.innerText)
            }
            previousKey = 'operator'
            operator = 'add'
        } else if (action === 'multiply') {
            if (previousKey === 'operator' ) {
                return
            } else if (operator === 'add') {
                runningTotal = runningTotal + parseFloat(display.innerText)
            } else if (operator === 'subtract') {
                runningTotal = runningTotal - parseFloat(display.innerText)
            } else if (operator === 'multiply' ) {
                runningTotal = runningTotal * parseFloat(display.innerText)
            } else if (operator === 'divide' ) {
                runningTotal = runningTotal / parseFloat(display.innerText)
            } else if (runningTotal === 0 ) {
                runningTotal = parseFloat(display.innerText)
            } else {
                runningTotal = runningTotal * parseFloat(display.innerText)
            }
            previousKey = 'operator'
            operator = 'multiply'
        } else if (action === 'subtract') {
            if (previousKey === 'operator' ) {
                return
            } else if (operator === 'add') {
                runningTotal = runningTotal + parseFloat(display.innerText)
            } else if (operator === 'subtract') {
                runningTotal = runningTotal - parseFloat(display.innerText)
            } else if (operator === 'multiply' ) {
                runningTotal = runningTotal * parseFloat(display.innerText)
            } else if (operator === 'divide' ) {
                runningTotal = runningTotal / parseFloat(display.innerText)
            } else if (runningTotal === 0 ) {
                runningTotal = parseFloat(display.innerText)
            } else {
                runningTotal = runningTotal - parseFloat(display.innerText)
            }
            previousKey = 'operator'
            operator = 'subtract'
        } else if (action === 'divide') {
            if (previousKey === 'operator' ) {
                return
            } else if (operator === 'add') {
                runningTotal = runningTotal + parseFloat(display.innerText)
            } else if (operator === 'subtract') {
                runningTotal = runningTotal - parseFloat(display.innerText)
            } else if (operator === 'multiply' ) {
                runningTotal = runningTotal * parseFloat(display.innerText)
            } else if (operator === 'divide' ) {
                runningTotal = runningTotal / parseFloat(display.innerText)
            } else if (runningTotal === 0 ) {
                runningTotal = parseFloat(display.innerText)
            } else {
                runningTotal = runningTotal / parseFloat(display.innerText)
            }
            previousKey = 'operator'
            operator = 'divide'
        }

        // equals key
        if (action==='calculate') {
            calculate()
            return
        }
    })
}

reset.addEventListener('click', ()=> {
    operator = ''
    runningTotal = 0
    previousKey = ''
    display.innerText = 0
})
