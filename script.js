//Getting all buttons
// const getButton_ac = document.getElementById("ac")
// const getButton_plusminus = document.getElementById("plus-minus")
// const getButton_modulus = document.getElementById("modulus")
// const getButton_divide = document.getElementById("divide")
// const getButton_seven = document.getElementById("seven")
// const getButton_eight = document.getElementById("eight")
// const getButton_nine = document.getElementById("nine")
// const getButton_multiply = document.getElementById("multiply")
// const getButton_four = document.getElementById("four")
// const getButton_five = document.getElementById("five")
// const getButton_six = document.getElementById("six")
// const getButton_subtract = document.getElementById("subtract")
// const getButton_one = document.getElementById("one")
// const getButton_two = document.getElementById("two")
// const getButton_three = document.getElementById("three")
// const getButton_plus = document.getElementById("plus")
// const getButton_zero = document.getElementById("zero")
// const getButton_dot = document.getElementById("dot")
// const getButton_equalto = document.getElementById("equalto")
const getOperatorButtons = document.querySelectorAll(`.operator`)
const getNumberButtons = document.querySelectorAll(`.number`)
const getDisplay = document.getElementById("Calculator-display")
const getButton_ac = document.getElementById("ac")
const getButton_plusminus = document.getElementById("plus-minus")
console.log(getNumberButtons)

//declaring variables
let firstInput = []
let secondInput = []
let operator = []
let indexNum = null
let indexOperator = null
let displayString = null
let currentButton = null
let previousButton = []

//functions
function gettingNumbers()
{
    if (operator.length == 0)
        {
            let number1 = getNumberButtons[indexNum].dataset.value
            firstInput.push(number1)
            displayString = firstInput.join('')
            getDisplay.innerHTML = displayString
            indexNum= null
        }
    else{
            getDisplay.innerHTML = ``
            let number2 = getNumberButtons[indexNum].dataset.value
            secondInput.push(number2)
            displayString = secondInput.join('')
            getDisplay.innerHTML = displayString
            indexNum= null
        }       

}

function changeColor(button_in) {
    currentButton = button_in
    previousButton.push(currentButton)

    if (previousButton.length==1) {
      currentButton.style.backgroundColor = 'white'
      currentButton.style.color = `rgb(205, 97, 15)`
    }
    else{
        currentButton.style.backgroundColor = 'white'
        currentButton.style.color = `rgb(205, 97, 15)`
        previousButton[0].style.backgroundColor = `rgb(205, 97, 15)`
        previousButton[0].style.color = 'white'
        previousButton.shift()
    }
}

function gettingoperators()
{
            let operator1 = getOperatorButtons[indexOperator].dataset.value
            operator[0]=operator1     
}



//Adding event listners

for (let i=0;i< getNumberButtons.length;i++)
{
    getNumberButtons[i].addEventListener('click',()=>{
        indexNum = i
        gettingNumbers()   
    })
}

for (let j=0;j< getOperatorButtons.length;j++)
{
    getOperatorButtons[j].addEventListener('click',(event1) =>{

        indexOperator = j
        gettingoperators() 
    }
    )
}

getButton_ac.addEventListener('click',()=>{
    getDisplay.innerHTML = `0` 
})

getButton_plusminus.addEventListener('click',()=>{
    getDisplay.innerHTML =  ${`-`}
})

// switch(elementId){
//     case plus:
//         addNumbers()
//     case minus:
//         subtractNumbers()
//     case multiply:
//         multiplyNumbers()
//     case divide:
//         divideNumbers()
//     case modulus:
//         modulusOfNumbers()
//     case ac:
//         cleardisplay()
// }