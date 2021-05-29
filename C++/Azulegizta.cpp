#include <iostream>
#include <locale>
using namespace std;

int main ()
{
    setlocale(LC_ALL,"ptb");
    int nOpcao;
    cout << "Ola! Digite o Nº da opção que deseja: \n" << "1 - Orçamento Metro Quadrado.\n2 - Calcular quantidade piso. \n" ;
    cin >> nOpcao ;
    if (nOpcao == 1)
    {
        float pMetro , mquadrado, cobrar ;
        cout << "Preco M/2: \n" ;
        cin >> pMetro ;
        cout << "Quantos M/2: \n";
        cin >> mquadrado ;
        cobrar= pMetro * mquadrado ;
        cout << "Valor Serviço: R$ " << cobrar ;

    
    }
    if (nOpcao == 2)
    {
    
    }

    
}