
//HTML Variables
let display = document.querySelector('#displayLower')
let buttons = document.querySelectorAll('.operation')
let backspace = document.querySelector('.backspace')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let currentValue = 0


buttons.forEach(button => {
    button.addEventListener('click',(e) =>
    {   
        //if (display.value===0) {display.value=""}
        let datasetValue = e.target.dataset.num
        display.value += datasetValue
        
    })
});

equal.addEventListener('click',(e)=>{

    if(display.value ===''){
        display.value=''
    }else {
        let result = eval(display.value)
        display.value = result
    }
})


clear.addEventListener('click',()=>{
    display.value =''
})

// backspace.addEventListener('click',() => {
//     let displayLength = display.value.length
    
//     display.value =  display.value.substring(0,1)
//     console.log(display.value)
// })

// buttons.forEach(function (button) {
//     button.addEventListener('click',function (e)  {
//         let datasetValue = e.target.dataset.num
//         display.value += datasetValue
//     })
// });
