function numKeypad(keyPad) {
    document.getElementById('result').value += keyPad;
}

function calculateSum() {
    const sumResult = document.getElementById('result').value;
    try {
        const result = new Function('return ' + sumResult)();
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function clearScreen() {
    document.getElementById('result').value = '';

}
