let zero = document.querySelector('#zero')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

let multiplica = document.querySelector('#multiplica')
let divide = document.querySelector('#divide')
let soma = document.querySelector('#soma')
let subtrai = document.querySelector('#subtrai')
let resultado = document.querySelector('#resultado')

let telaResultado = document.querySelector('#telaResultado')



soma.addEventListener('click', (valor) => {
    valor = soma.value
    telaResultado.innerHTML += `<span> ${valor} </span>`
    if()
})

//um.addEventListener('click', (valor) => {
//    valor = um.value
//    telaResultado.innerHTML += `<span> ${valor} </span>`
//})

function umClick() {
    let umValor = um.value
    let valor = parseInt(umValor)
    telaResultado.innerHTML += `<span> ${valor} </span>`
}


resultado.addEventListener('click', () => {
    let um = um.value
    let soma = um(valor) + um(valor)

    telaResultado.innerHTML = `<span> ${soma} </span>`
})