// === Globals ===
let operand1 = null;
let operand2 = null;
let operator = null;
let operandBuild = '';



//=== Queries ===
const expression = document.querySelector('#expression');
const result = document.querySelector('#result');
const  buttons = document.querySelectorAll('.row button');


// === FUNCTIONS ===

function setOperator(str) {
    
    operator = str;
    if (!operand1) operand1 = operandBuild;
    if (operand1 && operand2)
}

function parseInput (input) {

    switch (input) {

        // Digits
        case '1':
            operandBuild += 1;
            break;
        case '2':
            operandBuild += 2;
            break;
        case '3':
            operandBuild += 3;
            break;
        case '4':
            operandBuild += 4;
            break;
        case '5':
            operandBuild += 5;
            break;
        case '6':
            operandBuild += 6;
            break;
        case '7':
            operandBuild += 7;
            break;
        case '8':
            operandBuild += 8;
            break;
        case '9':
            operandBuild += 9;
            break;
        case '0':
            operandBuild += 0;
            break;
        
        // Operators
        case '=':
            equal();
            break;
        case '+':
            setOperator('+');
            break;
        case '-':
            setOperator('-');
            break;
        case '*':
            setOperator('*');
            break;
        case '/':
            setOperator('/');
            break;

        // Clear
        case 'C':
            clear();
            break;
        
        // Ignore Other Cases
        default:
            break;
    }
}

// operations

function checkOperands (defaultValOp1, defaultValOp2) {
    operand1 = +operand1 ? +operand1 : defaultValOp1;
    operand2 = +operand2 ? +operand2 : defaultValOp2;
}

function operate () {
    switch (operator) {
        case '+':
            checkOperands(0, 0);
            return add(+operand1, +operand2);
        case '-':
            checkOperands(0 , 0);
            return sub(+operand1, +operand2);
        case '*':
            checkOperands(0, 0);
            return multiply(+operand1, +operand2);
        case '/':
            checkOperands(0, 1);
            return divide(+operand1, +operand2);
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

function clear() {
    operand1 = null;
    operand2 = null;
    operator = null;
    operandBuild = '';
    console.log('=> CLEARED CALCULATOR');
}

function equal() {
    operand2 = operandBuild ? operandBuild : operand2;
    operandBuild = '';
    let result = operate();
    //Display result
    operand1 = result
}


function btnclick (event) {
    return event.target.textContext;
}


// == EVENTS ===

document.addEventListener('keydown', (e) => {
    e.preventDefault();

    //Search if button matches keydown input 

    // Focus on btn


});

buttons.forEach((node) => {
    node.addEventListener('click', btnclick);
})