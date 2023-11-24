//EXERCÍCIO 01
//Crie uma função que recebe dois números e um operador (+, -, *, /) como parâmetros e retorna o resultado da operação.

let n1 = 10;
let n2 = 5;
let operador = "k";

function calcular(n1, n2, operador) {
  try {
    if (
      operador === "+" ||
      operador === "-" ||
      operador === "*" ||
      operador === "/"
    ) {
      console.log(
        "O resultado da expressão é " + eval(`${n1} ${operador} ${n2}`)
      );
    } else {
      throw new Error("Operador inválido");
    }
  } catch (error) {
    console.error("Aconteceu um erro:" + error.message);
  }
}

calcular(n1, n2, operador);
