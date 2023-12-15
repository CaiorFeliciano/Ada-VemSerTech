export class Produtos {
  #id 
  static totalProdutos = 0;
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.#id = ++Produtos.totalProdutos;
  }

  get id() {
    return this.#id
  }
  
  set id(NovoId) {
    this.#id = novoId
  }
}

