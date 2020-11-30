'use strict'


const writeOutput = (value) => {
    document.querySelector('#input').value += value
}

const handleCalcClick = () => {
    const clickItems = document.querySelectorAll('#calc');
    clickItems.forEach(item => {
        item.addEventListener('click', (event) => {
            writeOutput(event.target.dataset.btn)
        })
    })
};

const cancelClick = () => {
    const delOutput = document.querySelector('.cancel');
    delOutput.addEventListener('click', (event) => {
        document.querySelector('#input').value = '';
    })
};

const equalClick = () => {
    const getResultInOutput = document.querySelector('.equal');
    getResultInOutput.addEventListener('click', (event) => {
        writeOutput(event.target.dataset.equal)
    })
};

















handleCalcClick();
cancelClick();
equalClick();