//Crie uma classe chamada Conta que possua os atributos para armazenar o numero da conta, o nome do titular e o saldo. Adicione métodos para realizar depositos e saques.
//A classe Conta deve ter os seguintes atributos privados:
//
//numeroConta
//numeroTitular
//saldo
//
//Esses atributos só podem ser acessados de dentro da classe Conta.
//
//Criar o método privado para validar saldo que verifica se a Conta possui saldo positivo e assim permitir o saque.
//
//No caso de saldo negativo, apresentar a mensagem e não permitir saque.

class Conta {
  #numeroConta;
  #numeroTitular;
  #saldo;

  constructor(numeroConta, numeroTitular, saldo = 0) {
    this.#numeroConta = numeroConta;
    this.#numeroTitular = numeroTitular;
    this.#saldo = saldo;
  }

  #validarSaldo(saque) {
    if (this.#saldo >= saque) {
      return true;
    } else {
      console.log("Saldo insuficiente. Saque não permitido.");
      return false;
    }
  }

  depositar(valor) {
    this.#saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.#saldo}`);
  }

  sacar(valor) {
    if (this.#validarSaldo(valor)) {
      this.#saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.#saldo}`);
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new Conta(123, "Titular A", 1000);

minhaConta.depositar(500); 
minhaConta.sacar(700);    
minhaConta.sacar(1000);  
console.log(minhaConta.getSaldo());
