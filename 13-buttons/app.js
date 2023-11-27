'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const buttonsContainer = document.querySelector('.buttonsContainer');
    const counter = document.querySelector('.counter');

    buttonsContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('button')) {
            const buttonNumber = parseInt(target.id.replace('button', ''));
            changeText(buttonNumber);
        }
    });

    function changeText(buttonNumber) {
        const button = document.getElementById('button' + buttonNumber);
        
        if (button.classList.contains('active-button')) {
            return;
        }
        deactivateAllButtons();
        button.innerHTML = 'Pressed!';
        button.classList.add('active-button');
        counter.textContent = parseInt(counter.textContent || 0) + 1;
    }

    function deactivateAllButtons() {
        const buttons = document.querySelectorAll('.button');
        
        buttons.forEach(function (button) {
            button.innerHTML = 'Press me';
            button.classList.remove('active-button');
        });
    }
});
