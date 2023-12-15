import { Produtos } from "./Produtos";

export class Frutas extends Produtos {
  constructor(nome, preco, quantidade) {
    super(nome, preco, quantidade)
  }
}