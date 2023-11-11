// 05 - Jogo de Adivinhação com Limite

// Modifique o jogo de adivinhação do Exercício 2 para limitar o número de tentativas. Se o usuário não adivinhar o número dentro de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.


const aleatorio = Math.floor(Math.random() * 100) + 1;
let limiteTentativas = 0;

while (limiteTentativas < 5) {
  const number = Number(prompt("Qual o número? Chute um entre 1 e 100."));

  if (number === aleatorio) {
    alert(`Você acertou! O número é o ${aleatorio}`);
    break;
  } else if (number > aleatorio) {
    alert(`O número é menor!`);
  } else if (number < aleatorio) {
    alert(`O número é maior!`);
  }
  limiteTentativas++

  if (limiteTentativas === 5) {
    alert(`Suas tentativas acabaram, o numero era ${aleatorio}`)
  }
};
