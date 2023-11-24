// EXERCÍCIO 02
// Crie uma aplicação que simula operações bancárias simples, como depósito, saque e consulta de saldo. Utilize funções para realizar essas operações e um loop para permitir que o usuário execute várias transações.

let saldo = 0;

function consultaSaldo() {
  alert(`Seu saldo é de R$ ${saldo}`);
}

function deposito() {
  try {
    const valorDeposito = Number(prompt(`Qual valor você deseja depositar?`));
    if (valorDeposito <= 0 || isNaN(valorDeposito)) {
      throw new Error(`Insira um valor válido. Operação encerrada.`);
    } else {
      saldo += valorDeposito;
      alert(`Valor depositado com sucesso. Seu saldo é de R$ ${saldo}`);
    }
  } catch (error) {
    alert(`Erro:` + error.message);
  }
}

function saque() {
  try {
    const valorSaque = Number(prompt(`Qual valor você deseja sacar?`));
    if (valorSaque > saldo) {
      throw new Error(`Você não tem saldo suficiente.`);
    } else {
      saldo -= valorSaque;
      alert(`Saque realizado com sucesso. Seu novo saldo é de R$ ${saldo}`);
    }
  } catch (error) {
    alert(`Erro:` + error.message);
  }
}
let opcoes;

do {
  try {
    opcoes = prompt(
      `Qual opção você deseja realizar:\n 1 - Consultar Saldo\n 2 - Depósito\n 3 - Saque\n 4 - Sair`
    );

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
        throw new Error("Digite uma opção válida");
    }
  } catch (error) {
    alert(`Error:` + error.message);
  }
} while (opcoes !== "4");
