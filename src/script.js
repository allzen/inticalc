let result = document.getElementById("calcResult");

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        console.log("number clicked: " + number[i].id);
        result.innerText = number[i].id;
    });
}

let operator = document.getElementsByClassName("operator");
for(let i = 0; i < number.length; i++) {
    operator[i].addEventListener('click', function() {
        console.log("operator clicked: " + operator[i].id);
        if (operator[i].id = "plus") {
            console.log("plus");
        }
    })
}