const listaDeCompras = new Map();
//adicionando itens
listaDeCompras.set("Maças", 5);
listaDeCompras.set("Bananas", 3);
listaDeCompras.set("Leite", 2);
listaDeCompras.set("Pao", 1);

console.log(listaDeCompras)
//verificando a quantidade
console.log(listaDeCompras.get("Maças"), listaDeCompras.get("Bananas"), listaDeCompras.get("Leite"),listaDeCompras.get("Pao") )

//alterando quantidade
listaDeCompras.get("Maças", 10);
console.log(listaDeCompras)

//removendo leite
listaDeCompras.delete("Leite");
console.log(listaDeCompras)

//consultando leite ainda na lista
console.log(listaDeCompras.has("Leite"));

//calculando numero total de itens da lista
const macas = listaDeCompras.get("Maças");
const banana = listaDeCompras.get("Bananas");
const pao = listaDeCompras.get("Pao");

const total = macas + banana + pao;

console.log(total)
