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
        calc = [];
    })
};


// Gombleütés figyelő - = és majd eredmény megjelenítése

const equalClick = () => {
    const getResultInOutput = document.querySelector('.equal');
    getResultInOutput.addEventListener('click', (event) => {
        //        document.querySelector('#input').value = '';
        writeOutput(event.target.dataset.equal);
        writeOutput(result);
    })
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
const numsAndOperatorsSeparator = () => {
    const outputString = document.querySelector('#input').value;
    let num = '';
    for (let i = 0; i < outputString.length; i += 1) {
        if (signes.indexOf(outputString[i]) === -1) {
            num += outputString[i];
        } else {
            numbers.push(parseFloat(num));
            num = '';
            operators.push(outputString[i])
        }
    }
    numbers.push(parseFloat(num));
    //    if (numbers.includes(NaN)) {
    //        document.querySelector('#input').value = 'ERROR!';
    //    }
    console.log('Számok:', numbers, 'Jelek:', operators);
}


// Műveletek végrehajtása

let calc = [];
let result = 0;
const calculator = () => {
    calc.push(numbers[0]);
    for (let i = 0; i < numbers.length - 1; i += 1) {
        for (let j = 0; j < operators.length; j += 1) {
            calc.push(operators[j], numbers[i+1]);
            console.log(calc);
            if (operators[j] === '+') {
                result = sum(calc[0], calc[2]);
            } else if (operators[j] === '-') {
                result = sub(calc[0], calc[2]);
            } else if (operators[j] === '×') {
                result = mul(calc[0], calc[2]);
            } else if (operators[j] === '÷') {
                result = div(calc[0], calc[2]);
            }
            calc = [result];
            console.log(result);
        }
    }
}









handleCalcClick();
cancelClick();
equalClick();
numsAndOperatorsSeparator();
calculator();