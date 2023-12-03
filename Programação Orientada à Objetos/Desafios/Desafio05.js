//Crie uma classe Animal que tenha as seguintes propriedades:

//nome, idade, espécie

//Além disso, crie um método imprimirDados() que imprima no console as informações do animal. Crie também um método emitirSom() que emita o som do animal atráves do console.log().

//Crie duas classes derivadas da classe Animal usando herança: Cachorro e Gato

//A classe Cachorro deve ter a propriedade Tamanho.
//A classe Gato deve ter a propridade cor.

//O método emitir sim deve ser sobrescrito e emitir o respectivo som do animal da classe filho.

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  //método para imprimir os dados no console
  imprimirDados() {
    console.log(
      `Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`
    );
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, tamanho) {
    super(nome, idade, "Cachorro"); //super para chamar os métodos da classe pai = Animal
    this.tamanho = tamanho; //adicionando propriedade específica de cachorro
  }
  emitirSom() {
    console.log(`Au Au`);
  }
  imprimirDados() {
    super.imprimirDados(); // Chamando o método imprimirDados() da classe pai
    console.log(`Tamanho: ${this.tamanho}`); //adicionando a propriedade específica para imprimir
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade, "Gato");
    this.cor = cor;
  }
  emitirSom() {
    console.log(`Miau`);
  }
  imprimirDados() {
    super.imprimirDados();
    console.log(`Cor: ${this.cor}`);
  }
}

const cachorro1 = new Cachorro("Paçoca", 10, "Médio");
const gato1 = new Gato("Luke", 10, "Branco");

cachorro1.imprimirDados();
cachorro1.emitirSom();
gato1.imprimirDados();
gato1.emitirSom();
