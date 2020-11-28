'use strict'

// Mező és gombok kiválasztása

const clickItems = document.querySelectorAll('.buttons[data-btn]')
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
    console.log(buttons);
};


// Esemény lefuttatása

buttonEvent()

