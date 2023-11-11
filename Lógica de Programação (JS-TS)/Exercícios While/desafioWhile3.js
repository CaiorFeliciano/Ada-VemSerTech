// 03 - Soma de Números Pares

// Desenvolva um programa que peça ao usuário para inserir números inteiros. Use um loop while para calcular a soma dos números pares inseridos pelo usuário. Pare a entrada quando o usuário inserir 0 e exiba a soma total.


let totalPares = 0;
let totalImpares = 0;

while(true){
  const numero = Number(prompt('Digite um numero'))
  if(numero === 0) {
    break;
  }

  if(numero % 2 === 0) {
    totalPares = totalPares + numero;
  } else {
    totalImpares = totalImpares + numero;
  }
}

console.log('Total das somas dos pares:', totalPares)
console.log('Total das somas dos Impares:', totalImpares)
console.log('Total:', totalImpares + totalPares)