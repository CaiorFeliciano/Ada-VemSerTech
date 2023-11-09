// 10 - Determinação de Estação do Ano

// Escreva um programa que recebe o nome de um mês como entrada e utiliza um switch case para determinar a estação do ano correspondente. Use a seguinte correspondência de meses:

// Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, Novembro: "Outono"


const mes = "Janeiro";

switch (mes) {
  case "Dezembro":
  case "Janeiro":
  case "Fevereiro":
    console.log("Inverno");
    break;
  case "Março":
  case "Abril":
  case "Maio":
    console.log("Primavera");
    break;
  case "Junho":
  case "Julho":
  case "Agosto":
    console.log("Verão");
    break;
  case "Setembro":
  case "Outubro":
  case "Novembro":
    console.log("Outono");
    break;
  default:
    console.log("Digite um mês válido!");
    break;
}
