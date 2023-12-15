import { Produtos } from "./Produtos";

export class Estoque {
  static #produtos = [];
  static ids = 0;
  constructor() {}
  static cadastrarProdutos(produto) {
    Estoque.produtos.push(produto);
  }
  static deletarProduto(produtoId) {
    this.#produtos = Estoque.produtos.filter(
      (produto) => produto.id != produtoId
    );
  }
  static atualizarProduto(novoProduto) {
    this.#produtos.slice(novoProduto.id - 1, 1);
    this.#produtos[novoProduto.id - 1] = novoProduto;
  }
  static get produtos() {
    return this.#produtos;
  }
  static findProduto(id) {
    return this.#produtos.find((produto) => produto.id == id);
  }
}
