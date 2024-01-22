const allButtons = document.querySelectorAll('.buttons');
const screen = document.querySelector('.cal-screen')

let value = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function (event) {
    const clickedValue = event.target.innerHTML
    if (value.includes(clickedValue)) {
      screen.textContent = clickedValue
    }
  })
}

console.log(allButtons)