// 07 - Achei a logica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N como entrada e retorna os primeiros N termos da sequência


const start = 14;
const lista = [];

for(let count = 0; count < start; count++) {
  if(count <= 1){
    lista.push(1)
  } else {
    lista.push(lista[count - 1] + lista[count - 2])
  }
}
console.log(lista)