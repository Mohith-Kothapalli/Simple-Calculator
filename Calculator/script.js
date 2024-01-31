let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = formatResult(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function formatResult(result) {
    // Limit the number of decimal places
    return Number.isInteger(result) ? result : result.toFixed(4);
}
