// script.js
function createStateOptions() {
    let states = document.getElementById('select-st');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < stateOptions.length; index += 1) {
        let option = document.createElement('option');
        option.innerText = stateOptions[index];
        option.value = stateOptions[index];
        states.appendChild(option);
    }
}

function validateData() {

    let inputName = document.querySelector('[name=name]');

    if (inputName.value.length > 40 || inputName.value.length === 0) {
        alert('Nome inválido!!');
    }

    let inputEmail = document.querySelector('[name=email]');

    if (inputEmail.value.length > 50 || inputEmail.value.length === 0) {
        alert('Email inválido!!');
    }

    let inputCPF = document.querySelector('[name=cpf]');

    if (inputCPF.value.length > 11 || inputCPF.value.length === 0) {
        alert('CPF inválido!!');
    }


}



window.onload = function() {
    createStateOptions()

    let btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        validateData();
    })
}