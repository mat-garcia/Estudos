#include <iostream>

using namespace std;

int main()

{

  int numMes;

  const char *mesExtenso;

  bool invalido=false;

  cout <<"Informe o número do mês: ";

  cin >> numMes;

  switch (numMes)

  {

    case 1:

      mesExtenso="janeiro";

      break;

    case 2:

      mesExtenso="fevereiro";

      break;

    case 3:

      mesExtenso="março";
      break;

    case 4:

      mesExtenso="abril";
      break;

    case 5:

      mesExtenso="maio";
      break;

    case 6:

      mesExtenso="junho";
      break;

    case 7:

      mesExtenso="julho";

      break;

    case 8:

      mesExtenso="agosto";

      break;

    case 9:

      mesExtenso="setembro";

      break;

    case 10:

      mesExtenso="outubro";

      break;

    case 11:

      mesExtenso="novembro";

      break;

    case 12:

      mesExtenso= "dezembro";

      break;

    default:

      cout <<"Mês inválido!!!";

      invalido=true;

    }

    if (!invalido)

    {

    cout <<"O número "<<numMes <<" equivale ao mês de " <<mesExtenso;

    }

}

