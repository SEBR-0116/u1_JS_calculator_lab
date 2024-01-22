function clearScreen() {
    document.getElementById("result").value = ''
}

function display(value) {
    document.getElementById("result").value += value
}

function calculate() {
        const display = document.getElementById("result")
        if (display.value) {
            display.value =Function("return " + display.value)()
        } else {
            alert('try again')
        }
    }
    function clearScreen() {
        document.getElementById("result").value = ''
    }

    function display(value) {
        document.getElementById("result").value += value
    }

    function calculate() {
        const display = document.getElementById("result")
        if (display.value) {
            display.value = Function("return " + display.value)()
        } else {
            alert('try again')
        }
    }