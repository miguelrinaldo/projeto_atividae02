//capturar os elementos do DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista')
const inputRenda = document.querySelector('#renda')

let contPessoas = 0
let contFr = 0
let cont2000 = 0
let contM = 0
let acum = 0.0

//capturar o evento submit no form
formPessoa.addEventListener('submit', (evt)=>{
    //interromper o evento padrão
    evt.preventDefault()

    //capturando o a renda digitada para acumular
    let numDigitado = Number(inputRenda.value)

    //contar o numero de pessoas registradas
    contPessoas++
    
    //criando o objeto data form
    const dadosForm = new FormData(formPessoa)

    //criando e preenchendo o objeto literal pessoa
    const pessoa = {
        idade: dadosForm.get('idade'),
        sexo: dadosForm.get('sexo'),
        renda: dadosForm.get('renda')
    }

    //limpar o form
    formPessoa.reset()

    //se pessoa masculino acumular valor digitado
    if(pessoa.sexo === 'masculino'){
        acum += numDigitado
    }

    //contar o numero de homens
    if(pessoa.sexo === 'masculino'){
        contM++
    }

    //contar mulheres com renda entre 1000 e 3000
    if((pessoa.sexo === 'feminino') && (pessoa.renda >=1000) && (pessoa.renda) <= 3000){
        contFr++
    }

    //contar as pessoas com superior ou igual a 2000
    if(2000 <= pessoa.renda){
        cont2000++
    }

    divLista.innerHTML = ` Quantas pessoas foram digitadas: ${contPessoas} pessoas. <p> A média de salário do sexo masculino: R$ ${((acum) / (contM)).toFixed(2).replace('.',',')} reais <p>  Quantidade de Mulheres com renda entre R$ 1000,00 e R$ 3000,00: ${contFr} mulheres. <p> Percentual de pessoas do sexo masculino e feminino com salário maior ou igual a R$ 2000,00: ${(((cont2000) / (contPessoas)) * 100).toFixed(2)} %`


})