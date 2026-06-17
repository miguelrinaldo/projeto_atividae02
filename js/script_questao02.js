const btnNum = document.querySelector('#btn')
const inputnum = document.querySelector('#num')
const divDivisores = document.querySelector('#div-divisores')

btnNum.addEventListener('click', (evt) =>{
    let numDigitado = Number(input.value)

    for(i = 0; i <= numDigitado; i++){
        if(numDigitado % i == 0){
            divDivisores.innerHTML += `${i} <br>`
        }
    }
})