const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');


//function for click on button and it appearing on the screen
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        //finds the value in the 'data-num' attribute of the btn in html
        let value = event.target.dataset.num;
        //if/else for if the equal is clicked then show the value result
        //if clear is clicked, screen is cleared
        //else keep allowing other values onto the screen
        if (value === 'Equal') {
            let answer = eval(screen.value);
            screen.value = answer;
        } else if (value === 'Clear') {
            screen.value = '';
        } else {
            screen.value += value;
        }
    });
});