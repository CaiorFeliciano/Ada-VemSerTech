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
