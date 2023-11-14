// 12 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e quantidade de tentativas e mostre as rolagens individuais e a soma dos valores?

// Entradas:

// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3


const dado = 9;
const rolagens = 3;
let tentativas = 3;

for(let j = 1; j <= tentativas; j++ ) {
  let somaDados = 0;
  console.log(`Tentativa: ${j}:\nRolagens Individuais:`)

  for (let i = 0; i < rolagens; i++) {
    const rolou = Math.floor(Math.random() * dado) + 1;
    somaDados += rolou;

    console.log(`Dado ${i + 1}: ${rolou}`)
  }

  console.log(
    `Soma dos Valores: ${somaDados}`
  );
}

