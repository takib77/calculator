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
    delOutput.addEventListener('click', (event) => {
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
    getResultInOutput.addEventListener('click', (event) => {
        numsAndOperatorsSeparator();
        calculator(calcform);
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
//    console.log('Számok:', numbers, 'Jelek:', operators);
};


// Műveletek végrehajtása

const calculator = (arr) => {
    for (let i = 0; i < operators.length; i += 1) {
//        console.log('CALCFORM', calcform);
        if (arr[i + 1] === '+') {
            result = sum(calcform[i], calcform[i + 2]);
        } else if (arr[i + 1] === '-') {
            result = sub(calcform[i], calcform[i + 2]);
        } else if (arr[i + 1] === '×') {
            result = mul(calcform[i], calcform[i + 2]);
        } else if (arr[i + 1] === '÷') {
            result = div(calcform[i], calcform[i + 2]);
        }
//        console.log('Result', result);
        calcform.splice(0, 3, result)
        calcform = [];
        numbers = [result];
        operators = [];
    }
};


handleCalcClick();
cancelClick();
equalClick();