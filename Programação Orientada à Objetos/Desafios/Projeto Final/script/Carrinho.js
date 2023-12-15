import {Estoque} from "./Estoque";

export class Carrinho {
  #produtos = []
  constructor (nomeCliente) {
    this.nomeCliente = nomeCliente
  }
  get produtos() {
    return this.#produtos
  }
  adicionarProdutos(id, qtd) {
    let novoProduto = Estoque.findProduto(id)

    const produtoEstoque = Object.assign({}, novoProduto)
    produtoEstoque.id = id;
    produtoEstoque.quantidade = produtoEstoque.quantidade - qtd;

    Estoque.atualizarProduto(produtoEstoque)

    novoProduto.quantidade = qtd;
    this.#produtos.push(novoProduto)
  }
  calcularTotalCarrinho() {
    let total = 0;
    this.produtos.forEach(produto => {
      total += produto.preco * produto.quantidade
    })
    return total;
  }
}