import { Produtos } from "./Produtos";

export class Verdura extends Produtos {
  #unidade; //ramo, folhas soltas
  #tipo; //verdura, legume

  constructor(nome, preco, quantidade, unidade, tipo) {
    super(nome, preco, quantidade);
    this.#unidade = unidade;
    this.#tipo = tipo;
  }
  get unidade() {
    return this.#unidade;
  }
  set unidade(unidade) {
    this.#unidade = unidade;
  }
  get tipo() {
    return this.#tipo;
  }
  set tipo(tipo) {
    this.#tipo = tipo;
  }
}
