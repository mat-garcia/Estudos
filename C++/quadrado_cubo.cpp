#include <iostream>
#include <locale>
using namespace std;

int main ()
{
    setlocale(LC_ALL, "ptbr");
    int numero , nquadrado , ncubo;
    cout << "Digite um numero: ";
    cin >> numero;
    nquadrado=numero*numero ;
    ncubo=numero*numero*numero ;
    cout << "O numero " << numero <<" ao quadrado é:" << nquadrado << "e ao cubo é: " << ncubo;
}
