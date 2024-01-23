//Getting the display and buttons into variables

let numDisplay = document.querySelector('#calc-display');

const clearAllBtn = document.querySelector('#btn-clear');

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btn0 = document.querySelector('#btn-0');

const reverseBtn = document.querySelector('#btn-reverse-sign');
const decimalBtn = document.querySelector('#btn-decimal');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');

const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const calcBtn = document.querySelector('#btn-calculate');

//Capture individual # clicked
let tempNum = 0;
//Capture number set prior to operation selection
let numSet = [];
//once operator clicked, save #'s as running total in variable (likely run through merging + parseInt)
let runningTotal = 0;

//use numDisplayDisplaying number on Calc Screen



btn1.addEventListener('click', () => {
    tempNum = btn1.getAttribute('data-value');
    getNumber();
});
btn2.addEventListener('click', () => {
    tempNum = btn2.getAttribute('data-value');
    getNumber();
});
btn3.addEventListener('click', () => {
    tempNum = btn3.getAttribute('data-value');
    getNumber();
});
btn4.addEventListener('click', () => {
    tempNum = btn4.getAttribute('data-value');
    getNumber();
});
btn5.addEventListener('click', () => {
    tempNum = btn5.getAttribute('data-value');
    getNumber();
});
btn6.addEventListener('click', () => {
    tempNum = btn6.getAttribute('data-value');
    getNumber();
});
btn7.addEventListener('click', () => {
    tempNum = btn7.getAttribute('data-value');
    getNumber();
});
btn8.addEventListener('click', () => {
    tempNum = btn8.getAttribute('data-value');
    getNumber();
});
btn9.addEventListener('click', () => {
    tempNum = btn9.getAttribute('data-value');
    getNumber();
});
btn0.addEventListener('click', () => {
    tempNum = btn0.getAttribute('data-value');
    getNumber();
});
let numSetInString = "01";
function getNumber() {
    //numSet.push(tempNum.toString());
    numSet.push(tempNum);

    console.log(numSet);
    numSet.forEach(num => {
        // numSetInString.charAt[numSetInString.length-1]
        //console.log(numSetInString.charAt[numSetInString.length-1])

    });
    numDisplay.innerHTML = numSetInString;
//console.log(numSet);
//numDisplay.innerHTML = btn1.getAttribute('data-value');
}

//if you click on an operator after a number, then get a tally of initial + recent number operated

addBtn.addEventListener('click', () => {
    //1 - merge numSet #'s into a set, and turn into one number
    //1, A - if running total already exists, where numSet has not yet been included,
    //then run the "calculate function" and have operator be +
    //1, B - otherwise, store inside of a running total
});

clearAllBtn.addEventListener('click', () => {
    //clear running total --> set to 0
    //clear operator selection
    //set numDisplay to 0 
});