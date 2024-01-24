
//HTML Variables
let display = document.querySelector('#displayLower')
let displayUpper = document.querySelector('#displayUpper')
let buttons = document.querySelectorAll('.operation')
let backspace = document.querySelector('.backspace')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')

//HTML Variables - User for Type 2 method
let numbers = document.querySelectorAll('.btn-num')
let oprators = document.querySelectorAll('.btn-opr')


//Memory Variable
let currentEntry =''

let currentOperator =''
let result = 0



// buttons.forEach(button => {
//     button.addEventListener('click',(e) =>
//     {   
//         //if (display.value===0) {display.value=""}
//         let datasetValue = e.target.dataset.num
//         display.value += datasetValue
        
//     })
// });

// equal.addEventListener('click',(e)=>{

//     if(display.value ===''){
//         display.value=''
//     }else {
//         let result = eval(display.value)
//         display.value = result
//     }
// })


////======================================Type 2 method  Without using eval() library function

numbers.forEach(number => {
    number.addEventListener('click',(e) =>
    {   
        
        if(display.value.length > 10 ){
            //change font-sixe if exceeeded the screen size
            display.style.fontSize = '45px'
        } else if (display.value.length <= 16 ){
            
            cEntry = e.target.dataset.num
            //console.log(`current entey ${cEntry}`)
            currentEntry += cEntry
            //display.value += cEntry
            displayUpper.value += currentEntry
            //console.log(`display ${display.value}`)
            display.value = currentEntry
        }
   
    })
});

oprators.forEach(operator => {
    operator.addEventListener('click', (e)=>{

       operatorFunction(e.target.dataset.num)
    })
}

);

equal.addEventListener('click',(e)=>{
    calculation(result,currentOperator)
})


clear.addEventListener('click',()=>{
    display.value =''
    displayUpper.value=''
})

function numberFuntion(number )  {
    currentEntry += number
    updateScreen()
}

function operatorFunction(operator){

     //console.log("b_o- " + operator)
     currentOperator = operator

    // if (result!==0){
    // //console.log("current op  "+currentOperator)
    // //console.log("cE- "+currentEntry)
    // result = parseFloat(currentEntry)
    // //console.log("r- "+result)
    // displayUpper.value = `${result}${currentOperator}`

    calculation(currentEntry,currentOperator)
    // }
    //console.log('result is zero')
    result = parseFloat(currentEntry)
    //console.log("r- "+result)
    displayUpper.value = `${result}${currentOperator}`
   
    currentEntry=''
    
    //clearInput()
}

function clearScreen(){
    currentEntry =''
    currentOperator =''
    result = 0
    updateScreen()
}

function clearInput(){
    currentEntry =''
   // display.value =''
}

function updateScreen(){
    //display.value = currentEntry > 0 ? currentEntry : result
    display.value = currentEntry || result
}

function calculation(cEntry,cOper){
    console.log(`currentEntry Before call - ${cEntry}`)
    const secondEntry = parseFloat(cEntry)
    console.log("currentEntry"+ secondEntry)
    switch (cOper){
        case '+':
            console.log("Result before "+ cOper)
            result += parseFloat(secondEntry)
            display.value = result

            console.log("result  after "+ result)
            break;

        default:
    }


}