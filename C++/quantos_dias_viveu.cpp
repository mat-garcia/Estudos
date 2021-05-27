#include <iostream>
#include <locale>
using namespace std;
int main()
{
setlocale(LC_ALL, "ptb");
float dias, anos, finalizar;
cout << "Quantos anos você já tem?";
cin >> anos;
dias = anos * 365;
cout << "Você já viveu " << dias << "dias. ";
cin >> finalizar;
}