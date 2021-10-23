let buts = document.querySelectorAll('.but')
let telaResultado = document.querySelector('#telaResultado')

buts.forEach((but) => {
    but.addEventListener('click', (event) => {
        let click = event.target
        let position = click.id
        console.log(position)
    })
})