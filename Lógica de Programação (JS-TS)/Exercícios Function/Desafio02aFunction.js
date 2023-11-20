//EXERCÍCIO 2-A
//Detalhe da escada: Esta é uma escada de tamanho n=4
//     #
//    ##
//   ###
//  ####
// Sua base e altura são iguais a navigator. É desenhado usando # simbolos e espaços. A ultima linha não é precedida por nenhum espaço. Escreva um programa que imprima uma escada do tamanho n.

function escada(n) {
  for (let i = 1; i <= n; i++) {
    let espacos = ' '.repeat(n - i);
    let degraus = '#'.repeat(i);
    console.log(espacos + degraus);
  }
}
escada(5);
