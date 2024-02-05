// create a text box
var textBox = document.createElement("input");
textBox.type = "text";
textBox.name = "username";
textBox.placeholder = "Enter your name";

//create a button
var button = document.createElement("button");
button.innerHTML = "Submit";

//append the elements to the html
document.body.appendChild(textBox);
document.body.appendChild(button);


// add functionality to yhe button
button.addEventListener("click", () => {
    
    alert("Button clicked! Your name is: " + textBox.value);
});