
//HTML Variables
let display = document.querySelector('#displayLower')
let buttons = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operation')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')


// buttons.forEach(button => {
//     button.addEventListener('click',(e) =>
//     {
//         let datasetValue = e.target.dataset.num
//         display.value += datasetValue
        
//     })
// });
genaricButtonF(buttons)

function genaricButtonF(elements){
    elements.forEach(element => {
        element.addEventListener('click',(e) =>
        {
            let count=0
           
            let datasetValue = e.target.dataset.num
            // if(datasetValue==='.')
            // {
               
            //      count= count+1

            //     // if(count > 1){
            //         console.log(`TTTT ${count}}`)
            //     // }
                
            // }
            display.value += datasetValue
            
        })
    });
}

// buttons.forEach(function (button) {
//     button.addEventListener('click',function (e)  {
//         let datasetValue = e.target.dataset.num
//         display.value += datasetValue
//     })
// });
