// 11 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e mostre as rolagens individuais e a soma dos valores?

// Entradas:

// Quantidade de dados: 2
// Quantidade de lados: 9


const dado = 20;
const rolagens = 3;
let somaDados = 0;

for (let i = 0; i < rolagens; i++) {
  const rolou = Math.floor(Math.random() * dado) + 1;
  somaDados += rolou;

  console.log(`Dado ${i + 1}: ${rolou}`)
}
console.log(`Soma das rolagens: ${somaDados}`)

