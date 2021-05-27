#include <iostream>
using namespace std;
int main()
{
float preCompra, preVenda;
cout << "Preco de compra do produto: R$ ";
cin >> preCompra;
preVenda = preCompra + (preCompra * 20/100);
cout << "Preco sugerido para venda R$ " << preVenda;
}