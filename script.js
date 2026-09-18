
// === FUNCTIONS ===
function parseCalcInput (strInput) {
}

// operations
function operate (operator, op1, op2) {
    switch (operator) {
        case '+':
            return add(op1, op2);
        case '-':
            return sub(op1, op2);
        case '*':
            return multiply(op1, op2);
        case '/':
            return divide(op1, op2);
        default:
            return 'ERROR';
    }
}                                                                                                           

function add (op1, op2) {
    return op1 + op2;
}

function sub (op1, op2) {
    return op1 - op2;
}

function multiply (op1, op2) {
    return op1 * op2;
}

function divide (op1, op2) {
    return op1 / op2;
}