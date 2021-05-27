const valores=[1.5, 2.5, 3.5, 4.5 ]
console.log(valores[0], valores[3])
console.log(valores[4])
/*como nao existe indice 4 ele retorna 'undefined', em outras
linguas de programação apresentaria erro.
OBS: precisa ter cuidado para nao bugar codigos inteiros.*/
valores[4]=5.0
console.log(valores)
console.log('qtd de itens na array..')
console.log(valores.length) // length - qtd de itens do array
console.log('adicionar mais itens numa array..')
valores.push(id=3,false, null,'test') // push - para adicionar mais itens
console.log(valores)
console.log('tirar o ultimo valor da array')

console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)


