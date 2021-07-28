const numBtns = document.querySelectorAll('[data-number]')
const operateBtns = document.querySelectorAll('[date-operate]')
const equalsBtn = document.querySelector('[date-equal]')
const delBtn = document.querySelector('[date-delete]')
const acBtn = document.querySelector('[date-all-clear]')
const prevOperandTextElem = document.querySelector('[data-return-operand]')
const currentOperandTextElem = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(prevOperandTextElem, currentOperandTextElem) {
        this.prevOperandTextElem = prevOperandTextElem
        this.currentOperandTextElem = currentOperandTextElem
    }

    clear() {}

    delete() {}

    appendNum(number) {}

    chooseOperation(operate) {}

    compile() {}

    updDisplay() {}
}