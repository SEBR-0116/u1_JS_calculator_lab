function clearScreen() {
    document.getElementById("result").value = ""
}

function display(value) {
    document.getElementById("result").value += value
}
function calculate() {
    var p = document.getElementById("result").value
    var q = eval(p)
    document.getElementById("result").value = q
}function add() {
    var p = document.getElementById("result").value
    var q = eval(p)
    document.getElementById("result").value = q
}

function subtract() {
    var p = document.getElementById("result").value
    var q = eval(p)
    document.getElementById("result").value = q
}

function multiply() {
    var p = document.getElementById("result").value
    var q = eval(p)
    document.getElementById("result").value = q
}

function divide() {
    var p = document.getElementById("result").value
    var q = eval(p)
    document.getElementById("result").value = q
}
