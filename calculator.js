const allButtons = document.querySelectorAll('.buttons');
const screen = document.querySelector('.cal-screen')
const operators = document.querySelector('.operator')
const equals = document.querySelector('.total')
const clear = document.querySelector('.clear')

let value = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
let previousInput = ''
let currentInput = ''


for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function (event) {
    const clickedValue = event.target.innerHTML
    if (value.includes(clickedValue)) {
      screen.textContent = clickedValue
    }
  })
}
 for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function (event) {
    const math = event.target.innerHTML
    if (value.includes(math)) {
      screen.textContent = math
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


    
    //different eventlisteners for parts of the calculator
    // operators
    // calc
    // clear
    
    //if (clickedValue === '+') {
    //   return screen.textContent = currentInput + previousInput
    // } else if (clickedValue === '-') {
    //   return screen.textContent = currentInput - previousInput
    // } else if (clickedValue === '*') {
    //   return screen.textContent = currentInput * previousInput
    // } else if (clickedValue === '/') {
    //   return screen.textContent = currentInput / previousInput
    // } 
    // return previousInput
//   })
// }

