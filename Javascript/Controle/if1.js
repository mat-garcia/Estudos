function soBoaNoticia (nota) {
    if(nota >= 7) { console.log('Aprovado com ' + nota) }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function seforvddeufalo (valor){
    if(valor) { console.log("É Verdade... " + valor)}
}

seforvddeufalo()
seforvddeufalo(null)
seforvddeufalo(undefined)
seforvddeufalo(NaN)
seforvddeufalo('')
seforvddeufalo(0)
seforvddeufalo(-1)
seforvddeufalo(' ')
seforvddeufalo('?')
seforvddeufalo([])
seforvddeufalo([1,2])
seforvddeufalo({})