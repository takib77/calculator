'use strict'

//Mező és gombok kiválasztása

const output = (document.querySelector('#input[data-field]'));
const buttons = Array
    .from(document.querySelectorAll('.buttons[data-btn]'))
    .map(item => item.textContent);
;


//console.log(output);
console.log(buttons);


const handleClick = () => {
    for (let i = 0; i < buttons.length; i += 1) {
        return console.log(buttons[i].textContent);
    }
};


//
//
//const opSum = buttons[0].addEventListener('click', handleClick);
//
//console.log(opSum);

