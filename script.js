

// document.addEventListener

// const display= document.getElementById("display")

// function appendToDisplay(input) {
//   display.value += input;
// }
// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   display.value = eval(display.value)
// }


document.addEventListener('click', function () {
    const display = document.getElementById('display')
    const keys = document.getElementById('keys')

    document.getElementById('num1').addEventListener('click',() => appendToDisplay('1'))
    document.getElementById('num2').addEventListener('click',() => appendToDisplay('2'))
    document.getElementById('num3').addEventListener('click',() => appendToDisplay('3'))
    document.getElementById('num4').addEventListener('click',() => appendToDisplay('4'))
    document.getElementById('num5').addEventListener('click',() => appendToDisplay('5'))
    document.getElementById('num6').addEventListener('click',() => appendToDisplay('6'))
    document.getElementById('num7').addEventListener('click',() => appendToDisplay('7'))
    document.getElementById('num8').addEventListener('click',() => appendToDisplay('8'))
    document.getElementById('num9').addEventListener('click',() => appendToDisplay('9'))
    document.getElementById('num0').addEventListener('click',() => appendToDisplay('0')) 
    document.getElementById('calculate').addEventListener('click', calculate)   
    document.getElementById('clear').addEventListener('click', clearDisplay) 

    function appendToDisplay(value) {
        display.value += value
    }

    function calculate() {
        try {
            display.value = eval(display.value)
        } catch (error) {
            display.value = 'Error'
        }
    }

    function clearDisplay () {
        display.value = ''
    }
})
