// Get references to HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultDisplay = document.getElementById('result');
// Function to perform the calculation
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
        return;
    }
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDisplay.textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = 'Invalid operation selected.';
            return;
    }
    resultDisplay.textContent = `Result: ${result}`;
}