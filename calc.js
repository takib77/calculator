'use strict'


// Gombleütések megjelentése a kijelzőn

const writeOutput = (value) => {
    document.querySelector('#input').value += value
}


// Gombleütéseket figyelő esemény (kivéve C és =)

const handleCalcClick = () => {
    const clickItems = document.querySelectorAll('#calc');
    clickItems.forEach(item => {
        item.addEventListener('click', (event) => {
            writeOutput(event.target.dataset.btn)
        })
    })
};


// Gombleütés figyelő - C és kijelzőmező nullázása

const cancelClick = () => {
    const delOutput = document.querySelector('.cancel');
    delOutput.addEventListener('click', (event) => {
        document.querySelector('#input').value = '';
    })
    calc = [];
    result = 0;
};


// Gombleütés figyelő - = és majd eredmény megjelenítése

const equalClick = () => {
    const getResultInOutput = document.querySelector('.equal');
    getResultInOutput.addEventListener('click', (event) => {
        document.querySelector('#input').value = '';
        writeOutput(event.target.dataset.equal);
        writeOutput(result);
    })
};


// Eseménye eltávolító

const removeListenerCancel = () => {
    delOutput.removeEventListener('click', cancelClick)
};


// Elvégezhető műveletek listája és működésük

const sum = (x, y) => (x + y);
const sub = (x, y) => (x - y);
const mul = (x, y) => (x * y);
const div = (x, y) => (x / y);
const signes = ['+', '-', '×', '÷'];


// Bevitt karakterek rendezése

const numbers = [];
const operators = [];
const calcform = [];
const numsAndOperatorsSeparator = () => {
    const outputString = document.querySelector('#input').value;
    let num = '';
    for (let i = 0; i < outputString.length; i += 1) {
        if (signes.indexOf(outputString[i]) === -1) {
            num += outputString[i];
        } else {
            numbers.push(parseFloat(num));
            calcform.push(parseFloat(num));
            num = '';
            operators.push(outputString[i]);
            calcform.push(outputString[i]);
        }
    }
    numbers.push(parseFloat(num));
    calcform.push(parseFloat(num));
    if (numbers.includes(NaN)) {
        document.querySelector('#input').value = 'ERROR!';
    }
    console.log('Számok:', numbers, 'Jelek:', operators);
}


// Műveletek végrehajtása

let calc = [];
let result = 0;
const calculator = (arr) => {
    calc.push(calcform[0])
    for (let i = 0; i < arr.length; i += 1) {
        calc.push(arr[i + 1], arr[i + 2]);
        console.log('PUSH', calc);
        if (arr[i + 1] === '+') {
            result = sum(calc[0], calc[2]);
        } else if (arr[i + 1] === '-') {
            result = sub(calc[0], calc[2]);
        } else if (arr[i + 1] === '×') {
            result = mul(calc[0], calc[2]);
        } else if (arr[i + 1] === '÷') {
            result = div(calc[0], calc[2]);
        }
        calc = [result];
        console.log(result);
        calcform.splice(0, 2, [result]);
    }
};



handleCalcClick();
numsAndOperatorsSeparator();
calculator(calcform);
//cancelClick();
equalClick();