// 01 - Verificação de Números Pares e Ímpares (If e Ternário)

// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar.


const numero = 13;

const parOuImpar = numero % 2 === 0 ? "Par" : "Ímpar"

if (numero % 2 === 0) {
  console.log("Par")
} else {
  console.log("Ímpar")
}

console.log(parOuImpar)