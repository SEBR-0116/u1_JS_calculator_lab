
const display = document.querySelector('#display')

function inputbtn(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function equals(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}