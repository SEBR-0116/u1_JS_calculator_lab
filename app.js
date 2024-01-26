//Global
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const clear = document.querySelector('#clear')


//Functions
function clearDisplay() {
    display.innerText = '0'
} clearDisplay()
//


function getcurrentDisplay() {
    let currentDisplay = display.innerHTML
    currentDisplay = parseInt(currentDisplay)
    return currentDisplay
}

function equals(event) {
    document.querySelector("#solve").addEventListener('click', () => {
        let 
    })
}

//for Loop click Event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click =>  {
        let input = buttons[i].innerText
        if (display.innerHTML === '0' &&
            buttons[i].id === 'operator') {
            clearDisplay()
        } else if (display.innerHTML === '0' && 
                    buttons[i].id === 'clear'){
                        clearDisplay()
                    }
            else if (display.innerHTML === '0' &&
                    buttons[i].id === "btn") {
                        display.innerText = input
                    }
         else if (buttons[i].id === "btn")
        { 
            display.innerText += input
        } else if (buttons[i].id === "clear") {
            clearDisplay()
        } else if (buttons[i].id === "decimal") {
            display.innerText += input
            //Figure out how to Limit
        } else if (buttons[i].id === "operator") {
            let z = buttons[i].id.innerHTML
            let x = display.innerText
            clearDisplay()
            console.log(z)
            } else {
                let y = display.innerHTML
                equate = `${x}${z}${y}`
                display.innerText = parseInt(equate)
            }}
          //else if (buttons[i].id === "solve"){

                   
        )}