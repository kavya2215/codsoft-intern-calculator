let display = document.getElementById('display');

function appendInput(value) {
    input += value;
    updateDisplay();
}

function clearDisplay() {
    input = '';
    updateDisplay();
}

function calculateResult() {
    try {
        input = eval(input).toString();
        updateDisplay();
    } catch (error) {
        display.textContent = 'Error';
    }
}

function updateDisplay() {
    display.textContent = input;
}