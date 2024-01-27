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
const getButton_equalto = document.getElementById("equalto")
console.log(getNumberButtons)
console.log(getOperatorButtons)

//declaring variables
let firstInput = []
let secondInput = []
let operator = []
let indexNum = null
let indexOperator = null
let displayString = null
let currentButton = null
let previousButton = []
let plusminusCheck = false
let permanentAnswer = null
//functions
function gettingNumbers()
{
    if (operator.length == 0)
        {
            let number1 = getNumberButtons[indexNum].dataset.value
            firstInput.push(number1)
            displayString = firstInput.join('')
            console.log(`line 48 ${displayString}`)
            if(plusminusCheck==false)
            {
                getDisplay.innerHTML = displayString
            }
            else{
                displayString = `${`-`}${displayString}`
                getDisplay.innerHTML = displayString
            }
            indexNum= null
        }
    else{
            getDisplay.innerHTML = ``
            let number2 = getNumberButtons[indexNum].dataset.value
            secondInput.push(number2)

            displayString = secondInput.join('')
            console.log(`line 64 ${displayString}`)
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
     console.log(`line 92 ${operator[0]}`)
}

function addNumbers(){

    let answer1 =  parseFloat(firstInput.join(''), 10) + parseFloat(secondInput.join(''), 10)
    let answer =answer1.toFixed(3)
    firstInput = []
    firstInput[0] = answer
    secondInput = []
    console.log(`line 99 ${answer}`)
    return answer
}

function subtractNumbers(){

    let answer1 =  parseFloat(firstInput.join(''), 10) - parseFloat(secondInput.join(''), 10)
    let answer =answer1.toFixed(3)
    firstInput = []
    firstInput[0] = answer
    secondInput = []
    return answer
}

function multiplyNumbers(){

    console.log(`line 116 ${parseInt(firstInput.join(''), 10)}`)
    console.log(`line 117 ${parseInt(secondInput.join(''), 10)}`)
    let answer1 =  parseFloat(firstInput.join(''), 10) * parseFloat(secondInput.join(''), 10)
    let answer =answer1.toFixed(3)
    firstInput = []
    firstInput[0] = answer
    secondInput = []
    console.log(`line 111 ${answer}`)
    return answer
}

function divideNumbers(){

    let answer1 =  parseFloat(firstInput.join(''), 10) / parseFloat(secondInput.join(''), 10)
    let answer =answer1.toFixed(3)
    firstInput = []
    firstInput[0] = answer
    secondInput = []
    return answer
}

function modulusOfNumbers(){

    let answer1 =  parseFloat(firstInput.join(''), 10) % parseFloat(secondInput.join(''), 10)
    let answer =answer1.toFixed(3)
    firstInput = []
    firstInput[0] = answer
    secondInput = []
    return answer
}

function equalto_display(){

    let currentoperator2 = operator[0]
    console.log(currentoperator2)
    let toDisplay2 = null
    if(firstInput.length!=0 && secondInput.length!=0)
    {
    switch(currentoperator2){
        case `+`:
            toDisplay2 = addNumbers()
            console.log(`line 141  addition called`)
            console.log(`line 142 ${toDisplay2}`)
            getDisplay.innerHTML = toDisplay2
            operator = []
            changeColor(getOperatorButtons[4])
            break

        case `-`:
            console.log(`line 147  subtract called`)
            toDisplay2 = subtractNumbers()
            getDisplay.innerHTML = toDisplay2
            operator = []
            changeColor(getOperatorButtons[3])
            break

        case `*`:
            console.log(`line 153 multiply called`)
            toDisplay2 = multiplyNumbers()
            console.log(`line 155 ${toDisplay2}`)
            getDisplay.innerHTML = toDisplay2
            operator = []
            changeColor(getOperatorButtons[2])
            break

        case `/`:
            toDisplay2 = divideNumbers()
            getDisplay.innerHTML = toDisplay2
            operator = []
            changeColor(getOperatorButtons[1])
            break

        case `%`:
            toDisplay2 = modulusOfNumbers()
            getDisplay.innerHTML = toDisplay2
            operator = []
            changeColor(getOperatorButtons[0])
            break
    } 
    } 
    else if (firstInput.length!=0 && secondInput.length==0)  
    {
        secondInput.push(0)
        switch(currentoperator2){
            case `+`:
                toDisplay2 = addNumbers()
                console.log(`line 141  addition called`)
                console.log(`line 142 ${toDisplay2}`)
                getDisplay.innerHTML = toDisplay2
                operator = []
                changeColor(getOperatorButtons[4])
                break
    
            case `-`:
                console.log(`line 147  subtract called`)
                toDisplay2 = subtractNumbers()
                getDisplay.innerHTML = toDisplay2
                operator = []
                changeColor(getOperatorButtons[3])
                break
    
            case `*`:
                console.log(`line 153 multiply called`)
                toDisplay2 = multiplyNumbers()
                console.log(`line 155 ${toDisplay2}`)
                getDisplay.innerHTML = toDisplay2
                operator = []
                changeColor(getOperatorButtons[2])
                break
    
            case `/`:
                toDisplay2 = divideNumbers()
                getDisplay.innerHTML = toDisplay2
                operator = []
                changeColor(getOperatorButtons[1])
                break
    
            case `%`:
                toDisplay2 = modulusOfNumbers()
                getDisplay.innerHTML = toDisplay2
                operator = []
                changeColor(getOperatorButtons[0])
                break
        } 
        
    }

    // if (firstInput.length==0)
    // {
    //     getDisplay.innerHTML = `0`
    // }
    // else if(secondInput.length==0)
    // {
    //     getDisplay.innerHTML = firstInput[0]
    // }
    // else
    // {
    //     getDisplay.innerHTML = firstInput[0]
    // }
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

        if(firstInput.length!=0 && secondInput.length!=0)
        {
            equalto_display()
        }
        
        indexOperator = j
        gettingoperators() 
        plusminusCheck = false
    }
    )
}

getButton_ac.addEventListener('click',()=>{
    getDisplay.innerHTML = `0` 
    let valueToPut = null
    let forCheck = operator[0]
    switch(forCheck){
        case `+`:
            valueToPut= document.getElementById("plus")
            break

        case `-`:
            valueToPut= document.getElementById("subtract")
            break

        case `*`:
            valueToPut= document.getElementById("multiply")
            break

        case `/`:
            valueToPut=document.getElementById("divide")
            break

        case `%`:
            valueToPut=document.getElementById("modulus")
            break
    } 
   
    console.log(valueToPut)
    //changeColor(document.querySelector(valueToPut))
    firstInput = []
    secondInput = []
    operator = []
})

getButton_plusminus.addEventListener('click',()=>{

    plusminusCheck =true
    displayString = `${`-`}${displayString}`
    getDisplay.innerHTML =  displayString
})

getButton_equalto.addEventListener('click',()=>{

    equalto_display()
})
