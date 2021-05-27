const escola= "cod3r"

console.log(escola.charAt(4)) //pegar um determinado caractere
console.log(escola.charCodeAt(3)) //mostra o codigo unicode do caractere
console.log(escola.indexOf("3")) // busca no texto um caractere especifico

console.log(escola.substring(1)) // imprimi no console o texto a partir de um caractere
console.log(escola.substring(0, 3)) // =//= o texto de um ponto incial a um final determinado
console.log("escola ".concat(escola).concat(" !"))// exemplo de concatenar um texo
// console.log("escola " + (escola) + (" !")) outra forma de concatenar
console.log(escola.replace(3, 'e')) // substitui uma letra do texto por outra desejada
console.log("carla,gabriela,schell".split(',')) // separar as palavras, "ARRAY"