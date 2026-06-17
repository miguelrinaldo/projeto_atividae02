const inpuIdade = document.querySelector('#idade')
const inputPeso = document.querySelector('#peso')
const btnVerifica = document.querySelector('#btn-verifica')
const divResultado = document.querySelector('#div-resultado')

let cont12 = 0
let contPode = 0
let contNaoPode = 0

btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inpuIdade.value)
    let peso = Number(inputPeso.value)

    if ((idade >= 18) && (idade <= 60) && (peso > 50)) {
        contPode++
    } else {
        contNaoPode++
    }

    cont12++

    if (cont12 == 4) {
        inpuIdade.setAttribute('disabled', 'disabled')
        inputPeso.setAttribute('disabled', 'disabled')

        divResultado.innerHTML = `TOTAL DE PESSOA QUE PODEM DOAR ${contPode} <br> TOTAL DE PESSOA QUE NÃO PODEM DOAR ${contNaoPode} `
    }

    inpuIdade.value = ''
    inputPeso.value = ''
})