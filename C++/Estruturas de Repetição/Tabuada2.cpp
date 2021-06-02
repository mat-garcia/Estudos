#include <iostream>
using namespace std;

int main(){
    int numero, contador, res ;
    contador=0 ;
    cout << "Qual numero voce deseja saber a tabuada: \n";
    cin >> numero ;
    cout << "--------------------------------------------------------------------------\n\n" ;
   while (numero!= -1){
        cout << "Tabuada do n: " << numero << "\n\n" ;
        while ( contador <= 10)
        {
         res = numero*contador ;
        cout << numero << "x" << contador << "=" << res << "\n";
        contador++ ;
        }
        cout << "------------------------------------------------------------------------\n\n" ;
        cout << "Digite -1 para parar \n ou \n Escolha outro numero para saber a tabuada: \n" ;
        contador= 0 ;
        cin >> numero ;
        cout << "------------------------------------------------------------\n\n" ;
    }}
