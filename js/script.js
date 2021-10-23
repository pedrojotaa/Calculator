let telaResultado = document.querySelector('#telaResultado')
let buts = document.querySelectorAll('.but')
let resultado = document.querySelector('#resultado')

buts.forEach((but) => {
    but.addEventListener('click', (event) => {
        let click = event.target
        let valor = click.id

        telaResultado.innerHTML += `<span>${valor}</span>`

        //resultado()
    })
})

//function res(){}