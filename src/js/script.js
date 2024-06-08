const inputs = document.querySelectorAll('.input');
const avisos = document.querySelectorAll('.aviso');
const form = document.querySelector('.formulario');

inputs.forEach(inputs => {
    inputs.addEventListener('change', () => {
        if (inputs.value !== '') {
            inputs.classList.add('preenchido');
            inputs.classList.remove('nao-preenchido');
        } else {
            inputs.classList.remove('preenchido');
        }
    })
})

form.addEventListener('submit', event => {
    event.preventDefault();
    inputInvalido();
    adicionarAviso();
    verificarFormulario();

})

function inputInvalido() {
    inputs.forEach(inputs => {
        if (inputs.value === '') {
            inputs.classList.add('nao-preenchido');
        }
    })
}

function adicionarAviso() {
    inputs.forEach(inputs => {
        avisos.forEach(avisos => {
            if (inputs.value === '') {
                avisos.classList.add('ativo');
            } else {
                avisos.classList.remove('ativo');
            }
            
        })
    })
}

function verificarFormulario() {
    let todosPreenchidos = true;

    inputs.forEach(inputs => {
        if (inputs.value === '') {
            todosPreenchidos = false;
        }
    });

    if (todosPreenchidos) {
        alert('Formulário enviado');
    }
}



















