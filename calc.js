'use strict';


// Gombok, kijelző

const output = document.querySelector('#input');
const clickItems = document.querySelectorAll('#calc');
const delOutput = document.querySelector('.cancel');
const getResultInOutput = document.querySelector('.equal');


// Elvégezhető műveletek listája, működésük és egyéb változók

const sum = (x, y) => (x + y);
const sub = (x, y) => (x - y);
const mul = (x, y) => (x * y);
const div = (x, y) => (x / y);
const signes = ['+', '-', '×', '÷'];
let numbers = [];
let operators = [];
let calcform = [];
let calc = [];
let result = 0;


// Gombleütések megjelentése a kijelzőn

const writeOutput = (value) => {
    output.value += value
};


// Gombleütéseket figyelő esemény (kivéve C és =)

const handleCalcClick = () => {
    clickItems.forEach(item => {
        item.addEventListener('click', (event) => {
            writeOutput(event.target.textContent)
        })
    })
};


// Gombleütés figyelő - C és kijelzőmező nullázása

const cancelClick = () => {
    delOutput.addEventListener('click', () => {
        output.value = '';
        calc = [];
        numbers = [];
        operators = [];
        calcform = [];
        result = 0;
    })
};


// Gombleütés figyelő - = és majd eredmény megjelenítése

const equalClick = () => {
    getResultInOutput.addEventListener('click', () => {
        numsAndOperatorsSeparator();
        calculator();
        if (numbers.includes(NaN)) {
            output.value = 'ERROR!';
        } else {
            output.value = result;
        }
    })
};


// Bevitt karakterek rendezése

let num = '';
const numsAndOperatorsSeparator = () => {
    const outputString = output.value;
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
    num = '';
};


// Műveletek végrehajtása

const calculator = () => {
    for (let i = 0; i < calcform.length; i += 1) {
        if (calcform[i] === '+') {
            result = sum(calcform[i - 1], calcform[i + 1]);
            calcform.splice(i - 1, 3, result);
            i = 0;
        } else if (calcform[i] === '-') {
            result = sub(calcform[i - 1], calcform[i + 1]);
            calcform.splice(i - 1, 3, result);
            i = 0;
        } else if (calcform[i] === '×') {
            result = mul(calcform[i - 1], calcform[i + 1]);
            calcform.splice(i - 1, 3, result);
            i = 0;
        } else if (calcform[i] === '÷') {
            result = div(calcform[i - 1], calcform[i + 1]);
            calcform.splice(i - 1, 3, result);
            i = 0;
        }
    }
};

handleCalcClick();
cancelClick();
equalClick();