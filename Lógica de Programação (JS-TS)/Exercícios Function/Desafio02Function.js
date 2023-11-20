// EXERCÍCIO 02
// Crie uma aplicação que simula operações bancárias simples, como depósito, saque e consulta de saldo. Utilize funções para realizar essas operações e um loop para permitir que o usuário execute várias transações.

let saldo = 0;

function consultaSaldo() {
  alert(`Seu saldo é de R$ ${saldo}`);
}

function deposito() {
  const valorDeposito = Number(prompt(`Qual valor você deseja depositar?`));
  if (valorDeposito <= 0) {
    alert(`Insira um valor válido. Operação encerrada.`);
  } else {
    saldo += valorDeposito;
    alert(`Valor depositado com sucesso. Seu saldo é de R$ ${saldo}`);
  }
}

function saque() {
  const valorSaque = Number(prompt(`Qual valor você deseja sacar?`));
  if (valorSaque > saldo) {
    alert(`Você não tem saldo suficiente.`)
  } else {
    saldo -= valorSaque;
    alert(`Saque realizado com sucesso. Seu novo saldo é de R$ ${saldo}`)
  }
}


let opcoes;

do {
  opcoes = prompt(`Qual opção você deseja realizar:\n 1 - Consultar Saldo\n 2 - Depósito\n 3 - Saque\n 4 - Sair`);

  switch (opcoes) {
    case "1":
      consultaSaldo();
      break;
    case "2": 
      deposito();
      break;
    case "3":
      saque();
      break;
    case "4":
      alert("Encerrando");
      break;
    default:
      alert("Digite uma opção válida");
  }
} while (opcoes !== "4");