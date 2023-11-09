// 07 - Verificação de Números Pares e Ímpares

// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar. (Usar switch Case)


const numero = 9;

switch(numero % 2) {
  case 0:
    console.log("Par")
    break;
  case 1:
    console.log("Ímpar")
   break;
}

