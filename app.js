const buttons = document.querySelectorAll('.btn_Number, .btn_Option, .btn_Calculate')
const equalsButton = document.querySelector('.btn_Equals')
const clearButton = document.querySelector('.btn_Clear')

const display = document.querySelector('.display')

let displayData = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data_num')
    // alert(buttonValue + " was clicked")
    displayData += buttonValue
    // alert("Display " + displayData)
    display.textContent = displayData
    })
})

equalsButton.addEventListener('click', () => {
    displayData = eval(displayData)
    display.textContent = displayData
})

clearButton.addEventListener('click', () => {
    displayData = ""
    display.textContent = displayData
})