const numBtns = document.querySelectorAll('[data-number]');
const operateBtns = document.querySelectorAll('[date-operate]');
const equalsBtn = document.querySelector('[date-equal]');
const delBtn = document.querySelector('[date-delete]');
const acBtn = document.querySelector('[date-all-clear]');
const prevOperandTextElem = document.querySelector('[data-return-operand]');
const currentOperandTextElem = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevOperandTextElem, currentOperandTextElem)
numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updDisplay;
    })
})

class Calculator {
    constructor(prevOperandTextElem, currentOperandTextElem) {
        this.prevOperandTextElem = prevOperandTextElem;
        this.currentOperandTextElem = currentOperandTextElem;
        this.resetProgram = false;
        this.clear();
    }

    clear() {
        this.returnOperand = '';
        this.currentOperand = '';
        this.operate() = undefined;
    }

    delete() {
        this.currentOperandTextElem = this.currentOperandTextElem.toString.slice(0, -1);
    }

    appendNum(number) {
        this.currentOperand = number;
    }

    chooseOperation(operate) {
        this.compile();
    }
        
    compile() {
        let computation
    }

    updDisplay() {
        this.currentOperandTextElem.innerText = this.currentOperand;
    }
}