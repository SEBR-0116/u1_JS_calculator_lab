
//HTML Variables
let displayLower = document.querySelector('#displayLower')
//let displayUpper = document.querySelector('#displayUpper')

let backspace = document.querySelector('.backspace')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let period = document.querySelector('#period')

//HTML Variables - User for Type 2 method
let numbers = document.querySelectorAll('.btn-num')
let oprators = document.querySelectorAll('.btn-opr')

operationStringArray = []

let presentValue =''
let presentOperator =''

let resultValue=0

//////////////////////////////Event Listerner for Number
numbers.forEach(number => {
    number.addEventListener('click',(e) =>
    {   

         if(displayLower.value.length > 10 ){

            //change font-sixe if exceeeded the screen size
            displayLower.style.fontSize = '45px'

        } else if (displayLower.value.length <= 16 ){
            
           let cEntry = e.target.dataset.num

            // if(displayLower == '0'){
            //     displayLower=''}
            
                presentValue += cEntry
            displayLower.value = presentValue

        }
   
    })
});


//////////////////////////////Event Listerner for operator
oprators.forEach(operator => {
    operator.addEventListener('click', (e)=>{
        
            presentOperator  =e.target.dataset.num

        
      
       
       switch (presentOperator){
            case '+':
               
                pushNum_OprArray(presentValue,presentOperator)
                
            break

            case '-':
          
            pushNum_OprArray(presentValue,presentOperator)
            break

            case '*':
          
            pushNum_OprArray(presentValue,presentOperator)
            break

            case '/':
          
            pushNum_OprArray(presentValue,presentOperator)
            break

            case '=':
            operationStringArray.push(presentValue)
            resultValue = eval(operationStringArray.join(''))
            displayLower.value = resultValue
            operationStringArray=[]
            break

            default:
       }
    })

});



function pushNum_OprArray(pValue,pOper){

          
    operationStringArray.push(pValue)
    operationStringArray.push(pOper)
    console.log(" Array >> "+operationStringArray)
    displayUpper.value = operationStringArray.join('')
    presentValue =''
    presentOperator = ''
    displayLower.value=''
            
}




//\\\\\\\\\\\\\\\\\\\\

// function runLoopToCalculate(arrayList){

//     for (let i=0;i<arrayList.length;i+=2){ //Loop for NUmbers
//        // for (let j=1;j<arrayList.length-2;i+=2){ //Loop for Operators

//             //Adding operatio - +
//            if(arrayList[i+1]==='+')
//                 {
//                     console.log(` arrayList >> index ${i} of value is  ${arrayList[i]}`)
//                     resultValue = parseFloat(resultValue) + parseFloat(arrayList[i])
//                 }
//             else if (arrayList[i+1]==='-'){
//                 if(resultValue > arrayList[i]){
//                     resultValue = parseFloat(resultValue) - parseFloat(arrayList[i])
//                 }else {
//                     resultValue = (parseFloat(arrayList[i]) - parseFloat(resultValue))*-1
//                 }
//                   console.log(`Result during - >>  ${resultValue}`)
                

//             }
//     //}

//     }

// }










//////////////////////////////Event Listerner for removing last element
backspace.addEventListener('click',(e)=>{
    
    let displayValueLength = presentValue.length

    if (displayValueLength > 0) {
        // Remove the last character
        presentValue = presentValue.slice(0, displayValueLength - 1);
    }
    displayLower.value = presentValue
    //displayUpper.value = currentEntry

})

period.addEventListener('click',(e)=>{
    if(!presentValue.includes('.'))
        {presentValue += '.'}
    displayLower.value = presentValue
})

// //////////////////////////////Event Listerner for "="


//////////////////////////////Event Listerner for Screen cleaning
clear.addEventListener('click',()=>{
    
    displayLower.value =''
    displayUpper.value=''
    presentValue =''
    presentOperator=''
    OperationStringArray=[]
    resultValue=0

})





////======================================Type 2 method  Without using eval() library function


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

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// //////////////////////////////Event Listerner for Number
// numbers.forEach(number => {
//     number.addEventListener('click',(e) =>
//     {   

//          if(displayLower.value.length > 10 ){

//             //change font-sixe if exceeeded the screen size
//             displayLower.style.fontSize = '45px'

//         } else if (displayLower.value.length <= 16 ){
            
//            let cEntry = e.target.dataset.num

//             if(displayLower == '0'){
//                 displayLower=''}
            
//             currentEntry += cEntry
//             displayLower.value = currentEntry

//         }
   
//     })
// });

// //////////////////////////////Event Listerner for operator
// oprators.forEach(operator => {
//     operator.addEventListener('click', (e)=>{
           
//        let oprFunction =e.target.dataset.num
//         // secondEntry= parseFloat(currentEntry)
//         // currentEntry=''

//        switch (oprFunction){
//         case '+':
//           //  console.log(`Working ${oprFunction}`)
//             result += parseFloat(currentEntry)
//             displayLower.value = result.toString()
//             break

//         default:
//             //displayLower.value = result

//     }
//     })
// }

// );
