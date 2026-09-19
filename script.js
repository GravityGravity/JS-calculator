// === Globals ===
let operandBuild = '';

// === Calc Object ===
const calc = {
    operand1: null,
    operand2: null,
    operator: null,
    result: null,
    previousOperation: {
        prevOp2: null,
        prevOperator: null,
    },

    setPrevOperation() {
        this.previousOperation.prevOp2 = this.operand2;
        this.previousOperation.prevOperator = this.operator;
    },
};

// === Queries ===
const expression = document.querySelector('#expression');
const resultDisplay = document.querySelector('#result');
const exprDisplay = document.querySelector('#expression');
const buttons = document.querySelectorAll('.row button');

// === Functions ===

function setOperator(str) {
    if (calc.operator && operandBuild) {
        equal();
    }

    if (!calc.operand1) {
        calc.operand1 = operandBuild;
        operandBuild = '';
    }

    calc.operator = str;
    console.log(`operator set! ${calc.operator}`);
}

function parseInput(input) {
    console.log(input);

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
        case 'Enter':
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
        case 'c':
        case 'C':
        case 'Backspace':
            clear();
            break;

        // Ignore other cases
        default:
            break;
    }

    console.log(`Current operandBuild "${operandBuild}"`);
    setExpr();
}

// === Operations ===

function checkOperands(defaultValOp1, defaultValOp2) {
    calc.operand1 = +calc.operand1 ? +calc.operand1 : defaultValOp1;
    calc.operand2 = +calc.operand2 ? +calc.operand2 : defaultValOp2;
}

function operate() {
    switch (calc.operator) {
        case '+':
            checkOperands(0, 0);
            return add(+calc.operand1, +calc.operand2);
        case '-':
            checkOperands(0, 0);
            return sub(+calc.operand1, +calc.operand2);
        case '*':
            checkOperands(0, null);
            return multiply(+calc.operand1, +calc.operand2);
        case '/':
            checkOperands(0, null);
            return divide(+calc.operand1, +calc.operand2);
        default:
            return calc.operand1;
    }
}

function add(op1, op2) {
    return op1 + op2;
}

function sub(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    if (!op2) return 0;
    return op1 * op2;
}

function divide(op1, op2) {
    if (!op2) return NaN;
    return op1 / op2;
}

function clear() {
    calc.operand1 = null;
    calc.operand2 = null;
    calc.operator = null;
    operandBuild = '';
    calc.setPrevOperation();
    setResult('CLEARED!');
    console.log('!!! CLEARED CALCULATOR');
}

function equal() {
    // Skip empty operation
    if (!operandBuild && !calc.operand1) {
        return '';
    }

    if (operandBuild && calc.operand1) {
        calc.operand2 = operandBuild;
    }

    // No operator set: repeat the previous one (and previous operand2 if nothing was typed)
    if (!calc.operator) {
        calc.operator = calc.previousOperation.prevOperator;

        if (!operandBuild) {
            calc.operand2 = calc.previousOperation.prevOp2;
        }
    }

    calc.setPrevOperation();
    calc.result = operate(calc.operator, calc.operand2);

    console.log(operate());
    console.log(`${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`);

    calc.operand2 = null;
    calc.operator = null;
    operandBuild = '';

    // Set display result
    setResult(calc.result);

    // Move calc.operand1 to result
    calc.operand1 = calc.result;
}

// === Display ===

function setResult(newResult) {
    resultDisplay.textContent = newResult;
}

function setExpr() {
    exprDisplay.textContent = operandBuild || calc.operand2;
}

function btnclick(event) {
    parseInput(event.target.innerText);
}

// === Events ===

document.addEventListener('keydown', (e) => {
    e.preventDefault();

    // Search if button matches keydown input
    parseInput(e.key);
});

buttons.forEach((node) => {
    node.addEventListener('click', btnclick);
});