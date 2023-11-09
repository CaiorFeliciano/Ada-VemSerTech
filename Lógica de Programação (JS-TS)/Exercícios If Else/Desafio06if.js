// 06 - Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)
// Crie um programa que verifica a idade de uma pessoa e determina se ela pode comprar bebidas alcoólicas ou não. Se a pessoa tiver 18 anos ou mais, ela pode comprar bebidas alcoólicas; caso contrário, não pode.


const idade = 18;

const podeBeber = idade>= 18 ? "Pode Beber" : "Não Pode Beber";

if (idade >= 18) {
  console.log("Pode Beber")
} else {
  console.log("Não pode beber")
}

console.log(podeBeber)