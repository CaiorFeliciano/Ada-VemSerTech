// 08 - Crie um programa que pede ao usuário para inserir uma palavra e conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for e estruturas condicionais if para realizar a contagem.

const palavra = "Papibaquigrafo";

const vogais = [];

for (let i = 0; i < palavra.length; i++) {
  if(palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u") {
    vogais.push(palavra[i])
  }
}

console.log(vogais.length);