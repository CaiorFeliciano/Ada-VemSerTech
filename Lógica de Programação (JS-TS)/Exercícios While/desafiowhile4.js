// 04 - Adivinhe o Número

// Crie um programa que gere um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Use um loop while para continuar pedindo ao usuário que adivinhe até que ele acerte o número. Forneça dicas informando se o número é maior ou menor.


const aleatorio = Math.floor(Math.random() * 100) + 1;

while(true) {
  const number = Number(prompt("Qual o número? Chute um entre 1 e 100."));

  if(number === aleatorio) {
    alert(`Você acertou! O número é o ${aleatorio}`);
    break
  }

  if(number > aleatorio) {
    alert(`O número é menor!`)
  } else if (number < aleatorio) {
    alert(`O número é maior!`)
  }
}