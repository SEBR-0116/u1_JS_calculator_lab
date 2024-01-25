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

const runningTotalDisplay = document.querySelector('#prev-calc-total');
const runningOperatorDisplay = document.querySelector('#operator-selected');

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
//number recorded prior to operator taking in new set
let prevRunningTotal = 0;

//use numDisplayDisplaying number on Calc Screen

btn1.addEventListener('click', () => {
    tempNum = btn1.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn2.addEventListener('click', () => {
    tempNum = btn2.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn3.addEventListener('click', () => {
    tempNum = btn3.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn4.addEventListener('click', () => {
    tempNum = btn4.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn5.addEventListener('click', () => {
    tempNum = btn5.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn6.addEventListener('click', () => {
    tempNum = btn6.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn7.addEventListener('click', () => {
    tempNum = btn7.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn8.addEventListener('click', () => {
    tempNum = btn8.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn9.addEventListener('click', () => {
    tempNum = btn9.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
btn0.addEventListener('click', () => {
    tempNum = btn0.getAttribute('data-value');
    if (numSet.length == 1 && numSet[0] =='0') {
        numSet.shift()
    } else {
        console.log(tempNum)
    }
    getNumber();
});
decimalBtn.addEventListener('click', () => {
    if (numSet.includes('.')) {
        console.log('no action');
    } else {
        if (numSet.length == 1 && numSet[0] =='0') {
            numSet.shift()
        } else {
            console.log(tempNum)
        }
        tempNum = '.';
        getNumber();
    }
});
function getNumber() {
    numSet.push(tempNum);
    numDisplay.innerHTML = numSet.join("");
}
function updateRunningTotal() {

    //update running total count
    //in other function/based on operator selected, update the symbol + math
    
    runningTotal = parseFloat(runningTotal);
    runningTotal = parseFloat(numSet.join(""));
    calculateRunningTotal();
    
    // prevRunningTotal = runningTotal;
    // console.log(`Running total is ${runningTotal} and PrevRunningTotal is ${prevRunningTotal}`);
    // runningTotal = 0;
    // console.log(`Running total is NOW ${runningTotal} and PrevRunningTotal is ${prevRunningTotal}`);
}
function calculateRunningTotal() {
    if (prevRunningTotal == 0) {//if prevRunning is 0
        prevRunningTotal = runningTotal;
        numSet = [0];
        //numDisplay.innerHTML = 0;
    }
    else if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        if (runningOperatorDisplay.getAttribute('data-operator') == '&plus;') {
            prevRunningTotal += runningTotal;
            numSet = [0];
            numDisplay.innerHTML = prevRunningTotal;
            //console.log(runningOperatorDisplay.getAttribute('data-operator','&plus;'));
            
        } else if (runningOperatorDisplay.getAttribute('data-operator') == '&minus;') {
            prevRunningTotal -= runningTotal;
            numSet = [0];
            numDisplay.innerHTML = prevRunningTotal;
            //console.log(runningOperatorDisplay.getAttribute('data-operator'));
        }
        else if (runningOperatorDisplay.getAttribute('data-operator') == '&times;') {
            prevRunningTotal *= runningTotal;
            numSet = [0];
            numDisplay.innerHTML = prevRunningTotal;
            //console.log(runningOperatorDisplay.getAttribute('data-operator'));
        }
        else if (runningOperatorDisplay.getAttribute('data-operator') == '&divide;') {
            prevRunningTotal /= runningTotal;
            numSet = [0];
            numDisplay.innerHTML = prevRunningTotal;
            //console.log(runningOperatorDisplay.getAttribute('data-operator'));

        }
        //if plus, += runningTotal
        //if minus, -= runningTotal
        //if x, *= runningTotal
        //if /, /= runningTotal

        //then display result as numDisplay
       
        
        //code right above needs to be modified based on operator selected...
        //numDisplay stays the same until new number is selected...which resets numSet + numDisplay
    } else {
        console.log('Check your code! Error updating running total');
    }
}

//update inner HTML at top left of display
function updateRunningTotalDisplay() {
    runningTotalDisplay.innerHTML = prevRunningTotal; //change to prevRunningTotal?
    runningTotalDisplay.style.opacity = 1;
    runningOperatorDisplay.style.opacity = 1;
}
//if you click on an operator after a number, then get a tally of initial + recent number operated
//Clicking on Operators
addBtn.addEventListener('click', () => {
    runningOperatorDisplay.innerHTML = '&plus;';
    runningOperatorDisplay.setAttribute('data-operator','&plus;');
    updateRunningTotal();
    
    if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        updateRunningTotalDisplay();
    } else {
        console.log('No action until a number is selected');
    }
});

subtractBtn.addEventListener('click', () => {
    runningOperatorDisplay.innerHTML = '&minus;';
    runningOperatorDisplay.setAttribute('data-operator','&minus;')
    updateRunningTotal();
    
    if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        updateRunningTotalDisplay();
    } else {
        console.log('No action until a number is selected');
    }
})
multiplyBtn.addEventListener('click', () => {
    runningOperatorDisplay.innerHTML = '&times;';
    runningOperatorDisplay.setAttribute('data-operator','&times;')
    updateRunningTotal();

    if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        updateRunningTotalDisplay();
    } else {
        console.log('No action until a number is selected');
    }
})
divideBtn.addEventListener('click', () => {
    runningOperatorDisplay.innerHTML = '&divide;';
    runningOperatorDisplay.setAttribute('data-operator','&divide;')
    updateRunningTotal();

    if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        updateRunningTotalDisplay();
    } else {
        console.log('No action until a number is selected');
    }
})
calcBtn.addEventListener('click', () => {
    //fix code!
    runningOperatorDisplay.innerHTML = '&#61;';
    updateRunningTotal();
    if (prevRunningTotal > 0 || prevRunningTotal < 0) {
        updateRunningTotalDisplay();

    } else {
        console.log('No action until a number is selected');
    }
})

reverseBtn.addEventListener('click', () => {
    // //multiply by *-1
    runningTotal = parseFloat(runningTotal);
    runningTotal = parseFloat(numSet.join(""));

    if (runningTotal == 0 || runningTotal > 0 || runningTotal < 0) {
        if (runningTotal > 0) {
            runningTotal *= -1;
            console.log(runningTotal);
            numDisplay.innerHTML = runningTotal;
            numSet.unshift('-'); //add '-' to array
            //console.log(`Numset is now ${numSet}`);

        } else if (runningTotal < 0) {
            runningTotal *= -1;
            console.log(runningTotal);
            //console.log(`${runningTotal} is a negative`);
            numDisplay.innerHTML = runningTotal;
            numSet.shift(); //removing '-' from array
            //console.log(`Numset is now ${numSet}`);

        } else {
            console.log('No action until we have a number selected');
        }
    }
    else {
        console.log('Do nothing, yet. Only applied to numbers greater or less than 0');
    }
})
clearAllBtn.addEventListener('click', () => {
    //set numDisplay to 0
    //clear array for numSet
    //set running total to 0
    //set displayed running total to 0
    //hide displayed running total & operator
    numSet = [];
    console.log(numSet);
    runningTotal = 0;
    prevRunningTotal = 0;
    numDisplay.innerHTML = runningTotal;
    runningTotalDisplay.innerHTML ='';
    runningOperatorDisplay.innerHTML = '';
    runningTotalDisplay.style.opacity = 0;
    runningOperatorDisplay.style.opacity = 0;
});


//referenced this page to help with reading decimal #'s
//https://stackoverflow.com/questions/28894971/problems-with-javascript-parseint-decimal-string