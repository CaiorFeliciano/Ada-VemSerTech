// 02 - Números Primos

// Crie um programa que peça ao usuário para inserir um número e use um loop while para verificar se o número é primo ou não. Um número primo é aquele que só é divisível por 1 e por ele mesmo. Imprima se o número é primo ou não.


let numero = Number(prompt("Digite aqui um número!"));
let primo = true;

while (numero % 2 === 0) {
  primo = false;
  break;
} 

if (primo) {
  alert("Esse número é primo")
} else {
  alert("Esse número não é primo")
}
