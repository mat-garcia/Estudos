const limite = 10
let dados = 2
let valor = 25

function imprimirNumero () {
    if (dados <= limite){
        resultado= dados*valor
    } if (resultado <= 25) {
        console.log(resultado)
    } else {
        console.log("Por favor verique os dados e tente novamente!!")
    }
        
    
}

imprimirNumero()