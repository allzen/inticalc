let result = document.getElementById("calcResult");
console.log(result.textContent);

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        console.log("number clicked: " + number[i].id);
        if (result.textContent == 0) {
            result.innerText = number[i].id;
        } else {
            result.innerText += number[i].id;
            console.log(typeof result.textContent);
        }
    });
}

let operator = document.getElementsByClassName("operator");
for(let i = 0; i < number.length; i++) {
    operator[i].addEventListener('click', function() {
        console.log("operator clicked: " + operator[i].id);
        if (operator[i].id === "plus") {
            console.log("plus");
        }
        else if (operator[i].id === "minus") {
            console.log("minus");
        }
        else if (operator[i].id === "multiply") {
            
            console.log("multiply");
        }
        else if (operator[i].id === "divide") {
            console.log("divide");
        }
        else if (operator[i].id === "clear") {
            result.innerText = "0";
        }
        else if (operator[i].id === "equals") {
            console.log("equals");
        }
        else if (operator[i].id === "backspace") {
            result.innerText = result.textContent.substring(0, str.length - 1);
        }
    })
}