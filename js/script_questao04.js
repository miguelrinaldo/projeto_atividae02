//pegando elementos do DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')
const botaoSubmit = formPessoa.querySelector('button[type="submit"]')

let cont20 = 0
let cont18 = 0
let cont65 = 0
let cont1865 = 0
let contF = 0
let contM = 0

formPessoa.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    cont20++

    const dadosForm = new FormData(formPessoa)
    
    const pessoa = {
        nome: dadosForm.get('name'),
        idade: dadosForm.get('idade'),
        sexo: dadosForm.get('sexo')
    }

    console.log(pessoa.nome, pessoa.idade, pessoa.sexo)

    formPessoa.reset()


    if(pessoa.idade < 18){
        cont18++
    }else if((pessoa.idade >= 18) && (pessoa.idade <= 65)){
       cont1865++
    }else{
        cont65++
    }

    if (pessoa.sexo == 'masculino'){
        console.log(contM++)
    }else if(pessoa.sexo == 'feminino'){
        console.log(contF++)
    }

    divLista.innerHTML = ` Pessoas do sexo feminino: ${contF} <p> Pessoas do sexo masculino: ${contM} <p> Menores de 18 anos: ${cont18} <p> Idade entre 18 e 65: ${cont1865} <p> Idade maior que 65: ${cont65}`

    
    
})
