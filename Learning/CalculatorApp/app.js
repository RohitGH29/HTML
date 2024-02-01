// script.js

let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.innerHTML == 'AC') {
            // Clear the input box on 'AC' (All Clear) button click
            string = "";
        } else if (e.target.innerHTML == 'DE') {
            // Delete the last character on 'DE' (Delete) button click
            string = string.slice(0, -1);
        } else if (e.target.innerHTML == '=') {
            // Evaluate the expression and update the input box on '=' button click
            string = eval(string);
        } else {
            // Concatenate the clicked button's innerHTML to the input string
            string += e.target.innerHTML;
        }

        // Update the input box with the current input string
        inputBox.value = string;
    });
});
