// 10 - Fazer um simulador de rolagem de dados, que receba como input N dados de 6 lados e mostre as rolagens individuais e a soma dos valores?

// Entradas:

// Quantidade de dados: 2


const dado = 6;
const rolagens = 2;
let somaDados = 0;

console.log("Rolagens Individuais:")

for (let i = 0; i < rolagens; i++) {
  const rolou = Math.floor(Math.random() * dado) + 1;
  somaDados += rolou;

  console.log(`Dado ${i + 1}: ${rolou}`)
}

console.log(
  `Soma dos Valores: ${somaDados}`
);
