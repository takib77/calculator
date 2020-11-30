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
};


// Gombleütés figyelő - = és majd eredmény megjelenítése

const equalClick = () => {
    const getResultInOutput = document.querySelector('.equal');
    getResultInOutput.addEventListener('click', (event) => {
        writeOutput(event.target.dataset.equal)
    })
};


// Elvégezhető műveletek listája és működésük

const mathRules = {
    '+': (x, y) => (x + y),
    '-': (x, y) => (x - y),
    '×': (x, y) => (x * y),
    '÷': (x, y) => (x / y),
};

const signes = ['+', '-', '×', '÷'];
const numbers = [];
const operators = [];


// Bevitt karakterek rendezése

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
    if (numbers.includes(NaN)) {
        document.querySelector('#input').value = 'ERROR!';
    }
    console.log('Számok:', numbers, 'Jelek:', operators);
}


// Műveletek végrehajtása

const calculator = () => {

}









handleCalcClick();
cancelClick();
equalClick();
numsAndOperatorsSeparator();