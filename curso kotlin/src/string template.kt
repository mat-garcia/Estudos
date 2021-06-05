fun main(){
    val nome: String = "mateus"
    println("Hello " + nome + " !")
    println("Hello $nome !")    // use \$ para anular a string template
    print(" Soma é: ${soma(10,20)}") // string template com expressoes deve-se usar ${ função()}

}

fun soma(a: Int , b: Int) : Int = a + b