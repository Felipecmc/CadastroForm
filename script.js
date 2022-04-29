const listaCadastrados = []
let contador = 0
const cadastrar = document.getElementById("register-button")
const pesquisar = document.getElementById("btn")
const ul = document.getElementById("lista-de-alunos")
const aside = document.getElementById('aside')
const contagem = document.getElementById("total")
contagem.innerText = "Total de Cadastros:" + contador



class Pessoa {
    constructor(nome, sobrenome,dataNascimento,email,contato, telefone, cargo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo = cargo;
    }

    static addToAside(){
        ul.innerHTML = ""
        const cargoOptions = document.getElementById("cargoOption")
        cargoOptions.value = "Todos"
        contador = listaCadastrados.length
        for(let i = 0; i < listaCadastrados.length; i++){
        const li = document.createElement('li')
        const nomeCadastrado = document.createElement('span')
        nomeCadastrado.innerText = listaCadastrados[i].nome
        const emailCadastrado = document.createElement('span')
        emailCadastrado.innerText = listaCadastrados[i].email
        const cargoCadastrado = document.createElement('span')
        cargoCadastrado.innerHTML = listaCadastrados[i].cargo
        

        contagem.innerText = "Total de Cadastros:" + contador
        li.appendChild(nomeCadastrado)
        li.appendChild(emailCadastrado)
        li.appendChild(cargoCadastrado)
        ul.appendChild(li)
        }
    }
}


cadastrar.addEventListener("click", () => {
    let emailIsRepeated = false
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value
    const dataNascimento = document.getElementById('dataNascimento').value
    const email = document.getElementById('email').value
    const contato = document.getElementById('contato').value
    const telefone = document.getElementById('telefone').value
    const cargo = document.getElementById('cargo').value
    const user = new Pessoa(nome, sobrenome, dataNascimento, email, contato,telefone, cargo)
    for(let i = 0; i < listaCadastrados.length; i++) {
        if(email == listaCadastrados[i].email){
            emailIsRepeated = true
        }
    }
    if(emailIsRepeated == false){
        listaCadastrados.push(user)
        Pessoa.addToAside()
    }else{
        alert("Este E-mail já está em uso")
    }
})

pesquisar.addEventListener('click',function pesquisarCategoria() {
    ul.innerHTML = ""
    contador = 0
    contagem.innerText = "Total de Cadastros:" + contador
    const cargoOptions = document.getElementById("cargoOption").value
    for(let i = 0; i < listaCadastrados.length; i++){
        if(listaCadastrados[i].cargo === cargoOptions){
            contador++
            console.log(contador)
            const li = document.createElement('li')
            const nomeCadastrado = document.createElement('span')
            nomeCadastrado.innerHTML = listaCadastrados[i].nome
            const emailCadastrado = document.createElement('span')
            emailCadastrado.innerText = listaCadastrados[i].email
            const cargoCadastrado = document.createElement('span')
            cargoCadastrado.innerHTML = listaCadastrados[i].cargo

            contagem.innerText = "Total de Cadastros:" + contador
            li.appendChild(nomeCadastrado)
            li.appendChild(emailCadastrado)
            li.appendChild(cargoCadastrado)
            ul.appendChild(li)
        }else if(cargoOptions === "Todos"){
            contador++
            const li = document.createElement('li')
            const nomeCadastrado = document.createElement('span')
            nomeCadastrado.innerHTML = listaCadastrados[i].nome
            const emailCadastrado = document.createElement('span')
            emailCadastrado.innerText = listaCadastrados[i].email
            const cargoCadastrado = document.createElement('span')
            cargoCadastrado.innerHTML = listaCadastrados[i].cargo

            contagem.innerText = "Total de Cadastros:" + contador
            li.appendChild(nomeCadastrado)
            li.appendChild(emailCadastrado)
            li.appendChild(cargoCadastrado)
            ul.appendChild(li)
        }
    }
})

