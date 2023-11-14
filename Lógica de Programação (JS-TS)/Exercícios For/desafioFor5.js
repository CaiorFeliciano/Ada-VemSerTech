// 05 - Crie um objeto com valores numéricos e utilize um loop for-in para calcular e imprimir a soma desses valores.
// valor1: 10, valor2: 20, valor3: 30, valor4: 40


let numeros = {
  numero1: 1,
  numero2: 2,
  numero3: 3,
  numero4: 4,
  numero5: 5,
  numero6: 6,
  numero7: 7,
  numero8: 8,
  numero9: 9,
  numero10: 10,
}

let total =0 

for (numero in numeros) {
  console.log(total += numeros[numero])
}