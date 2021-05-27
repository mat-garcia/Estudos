//armazenar uma função numa variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 8)

//Função arrow numa variavel

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 8))

// retorno implicito
const subtração = (a, b) => a - b

console.log(subtração(2,8))
