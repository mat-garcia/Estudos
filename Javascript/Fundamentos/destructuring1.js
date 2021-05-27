const pessoas = {
    nome: "carlos",
    idade: 5,
    endereco: {
        logradouro: "Rua Xoxota",
        numero: 666,
    }

}

const {nome, idade} = pessoas
console.log(nome, idade)

const {nome: n, idade: i} = pessoas
console.log(n, i)

const {endereco: {logradouro, numero, cep}}= pessoas
console.log(logradouro, numero, cep)




