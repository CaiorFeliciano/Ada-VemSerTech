const frutas = new Map();

frutas.set("Maça", 5);
frutas.set("Banana", 3);
frutas.set("Pêra", 7);
frutas.set("Uva", 6);

console.log(frutas);

const maisCaro = frutas.get("Maça") > frutas.get("Banana");
console.log(maisCaro);

const custaIgual = frutas.get("Pêra") === frutas.get("Uva");
console.log(custaIgual);