let displayValue = "";

function appendTodisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById("display").value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}