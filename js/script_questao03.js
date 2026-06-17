const btnNum = document.querySelector('#btn-num')
const Div01 = document.querySelector('#div-01')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt) =>{
    for(i = 1; i <= 1000; i++){
        if( i % 7 == 0){
            cont++
        }
    }
    Div01.innerHTML =`${cont} esses números são divisíveis por 7`
})