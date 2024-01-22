
// GLOBAL VARIABLES
let result = 0
let previousResult = ""
let isSecondOperand = false

const validCharacters = ['0','1','2','3','4','5','6','7','8','9','0','.']

// HTML Elements
const resultText = document.querySelector('#result')
const previousResultText = document.querySelector('#previousOperation')
const buttons = document.querySelectorAll('td')


// Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            resultText.value == "0" ? resultText.value = button.innerHTML : resultText.value += button.innerHTML
            previousResultText.innerHTML == "0" ? previousResultText.innerHTML = button.innerHTML : previousResultText.innerHTML += button.innerHTML
        } else if (button.className == 'basicOperator' || button.className == 'advancedOperator') {
            switch (button.id) {
                case 'ac':
                    resultText.value = 0
                    previousResultText.innerHTML = 0
            }
        }
    })
})

resultText.addEventListener('input', (event) => {
    if ([...event.target.value].every(character => validCharacters.some((number) => number == character))) {
        //If a valid character has been typed
        previousResult = event.target.value
    } else {
        event.target.value = event.target.value.slice(0, -1)
    }
    
    if (event.target.value.length === 0) {
        event.target.value = "0"
        previousResult = event.target.value
    }

    result = parseFloat(event.target.value)
    previousResultText.innerHTML = previousResult
})
