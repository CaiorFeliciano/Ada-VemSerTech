//EXERCÍCIO 01 
//Crie uma função que recebe dois números e um operador (+, -, *, /) como parâmetros e retorna o resultado da operação.

let n1 = 10;
let n2 = 5;
let operador = "+"

function calcular(n1, n2, operador) {
  switch(operador) {
    case "+":
      console.log(`A soma dos números é ${n1 + n2}`);
      break;
    case "-":
      console.log(`A subtração dos números é ${n1 - n2}`);
      break;
    case "/":
      console.log(`A divisão dos números é ${n1 / n2}`);
      break;
    case "*":
      console.log(`A multiplicação dos números é ${n1 * n2}`);
      break;
    default:
      console.log("Escolha um operador válido");
      break;
  }
}

calcular(n1,n2,operador)