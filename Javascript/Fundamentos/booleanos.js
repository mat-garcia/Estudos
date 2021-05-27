let isAtivo= false
console.log(isAtivo)

isAtivo= true
console.log(isAtivo)

isAtivo= 0
console.log(!!isAtivo) // com duas !! 0 (zero) ou o (NADA) '' (campo vazio) retorta False
isAtivo=''
console.log(!isAtivo) // com uma ! o 0 ou '' retorna True, fazendo o contraio do !!
isAtivo= 1
console.log(!!isAtivo)

console.log('os verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Carla')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo= true))

console.log('os Falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo= false) )
console.log('karina')

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let name='Lucas'
console.log(name || 'Desconhecido!') 
// os || faz a funçao de 'OU' ex Nome ou Desconhecido( se nao ouver nome ele retorna Des..)
