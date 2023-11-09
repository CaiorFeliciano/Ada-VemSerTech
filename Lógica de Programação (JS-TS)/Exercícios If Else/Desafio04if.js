// 04 - Verificação de Triângulo

// Crie um programa que recebe três comprimentos de lados de um triângulo como entrada e determina se eles formam um triângulo equilátero (Todos os lados são iguais), isósceles (Dois lados são iguais) ou escaleno (Se nada é igual). Imprima a classificação do triângulo.

const ladoA = 11;
const ladoB = 13;
const ladoC = 10;

if (ladoA === ladoB && ladoA === ladoC) {
  console.log("Triângulo Equilátero")
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("Triângulo Isósceles")
} else {
  console.log("Triângulo Escaleno")
}