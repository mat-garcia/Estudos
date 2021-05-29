#include <iostream>
using namespace std;
int main()
{
    int anoAtual, anoNasc, idade ;
    cout << "Qual Ano do seu nascimento?" ;
    cin >> anoNasc ;
    cout << "Digite o ano atual: " ;
    cin >> anoAtual ;
    idade= anoAtual-anoNasc ;
    cout << "Voce tem ou fara " << idade << " anos." "\n";
    if (idade>=16)
    {
        cout << " Legal! voce ja pode votar \n";
    }
    else
    {
        cout << "Ha que pena, voce ainda e um jovem gafanhoto. Nao pode votar! \n";
    }
    
    int fim ;
    cout << "Finalizar? \n1 - sim\n2 - não" ;
    cin >> fim ;
    if (fim == 1)
    {
        cout << "Bye \n" ;
    }
    else
    {
        cout << "ok! irei esperar entao. \n " ;
    }
    
    
    


}