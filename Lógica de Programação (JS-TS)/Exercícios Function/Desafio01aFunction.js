//EXERCÍCIO 1-A
//Dados cinco números inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco números inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

// Exemplo: 

// arr - [1,3,5,6,9]

// a soma minima é: 1 + 3 + 5 + 7 = 16
// a soma maxima é: 3 + 5 + 7 + 9 = 24

// Saida: [16,24]


const numeros = [5,1,6,3,9];
const numeros2 = [9,3,3,5,8]

function somaMinMax(array) {
  array.sort((a,b) => a - b)
  const somaMin = array.slice(0, array.length - 1).reduce((a,b) => a + b, 0);
  const somaMax = array.slice(1).reduce((a,b) => a + b, 0);
  return `${somaMin}, ${somaMax}`

}

console.log(somaMinMax(numeros))
console.log(somaMinMax(numeros2))