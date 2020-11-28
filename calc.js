'use strict'

// Mező és gombok kiválasztása

const clickItems = document.querySelectorAll('.buttons[data-btn]');
const output = document.querySelector('#input[data-field]');
const buttons = Array
    .from(document.querySelectorAll('.buttons[data-btn]'))
    .map(item => item.textContent);


// Esemény létrehozása minden elemre


const buttonEvent = () => {
    clickItems.forEach(item => {
        item.addEventListener('click', handleClick);
    })
};


// Esemény folyamata

const handleClick = () => {
    for (let i = 0; i < buttons.length; i += 1) {
        output.value += buttons[i];
    }
    if (output.value.length > 22) {
        output.value = 'error';
    }
};

// Esemény lefuttatása

buttonEvent()










//const sum = buttons[0];
//const sub = buttons[1];
//const multi = buttons[2];
//const divis = buttons[3];
//const seven = buttons[4];
//const eight = buttons[5];
//const nine = buttons[6];
//const four = buttons[7];
//const five = buttons[8];
//const six = buttons[9];
//const one = buttons[10];
//const two = buttons[11];
//const three = buttons[12];
//const zero = buttons[13];
//const point = buttons[14];
//const equal = buttons[15];