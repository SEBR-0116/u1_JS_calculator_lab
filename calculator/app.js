//Declare global variables

let output = document.getElementById("output");

let buttons = document.querySelectorAll(".button");

let clearButton = document.getElementById("GA-symbol");

// let operations = ["+", "-", "=", "x", ".", "/"];
let operations = ["+-x./"];

//Declare Functions
function clear() {
  output.innerHTML = "";
}

//Declare addEventListeners
clearButton.addEventListener("click", clear);

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (!output.innerHTML.includes("=")) {
      output.innerHTML += button.innerHTML;
    }

    if (output.innerHTML.includes("=")) {
      let string = output.innerHTML.split("=");
      if (string[0].includes("x")) {
        let numbers = string[0].split("");
        let index = numbers.indexOf("x");
        numbers[index] = "*";
        let newNumbers = numbers.join("");
        output.innerHTML = eval(newNumbers);
      } else output.innerHTML = eval(string[0]);
    }
  });
}
