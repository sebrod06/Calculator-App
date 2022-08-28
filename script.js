// 1. clear function
// 2. calculate function
// 3. display function

function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

function display(value){
    let displayBox = document.getElementById("result");
    displayBox.value += value;
}

function calculate() {
    let displayBox = document.getElementById("result").value;
    let answer = eval(displayBox);
    document.getElementById("result").value = answer;
}
