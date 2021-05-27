let qtd = 1
const valorunit = 2.50
let cotaçao = 5.67

function imprimirSoma(a, b, c) {
    
    console.log('valor USD: $',a*b )
    console.log('valor BRL: R$',a*b*c.toFixed())
}
imprimirSoma(qtd, valorunit,cotaçao)

function soma(a,b= 0) {
    return a + b
}
console.log(soma(2, 3))



