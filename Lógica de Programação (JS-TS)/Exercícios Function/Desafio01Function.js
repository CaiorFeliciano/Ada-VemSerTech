//EXERCÍCIO 01 
//Crie uma função que recebe dois números e um operador (+, -, *, /) como parâmetros e retorna o resultado da operação.

let n1 = 10;
let n2 = 5;
let operador = "+"

function calcular(n1, n2, operador) {
  if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {
    console.log("O resultado da expressão é " + eval(`${n1} ${operador} ${n2}`))
  } else {
    console.log("Operador inválido")
  }
}

calcular(n1,n2,operador)