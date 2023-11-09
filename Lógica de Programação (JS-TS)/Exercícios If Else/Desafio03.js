//USANDO ARRAY E OBJETOS
const dicionarioDeSinomimos = {
  feliz: ["alegre", "contente", "satisfeito"],
  triste: ["melancólico", "abatido", "deprimido"],
  bom: ["ótimo", "excelente", "maravilhoso"]
}

console.log(dicionarioDeSinomimos.feliz)
console.log(dicionarioDeSinomimos.triste)
console.log(dicionarioDeSinomimos.bom)

//USANDO MAP
const dicionario = new Map();

dicionario.set("feliz", ["alegre", "contente", "satisfeito"]);
dicionario.set("triste", ["melancólico", "abatido", "deprimido"]);
dicionario.set("bom", ["ótimo", "excelente", "maravilhoso"]);

console.log(dicionario.get("feliz"));
console.log(dicionario.get("triste"));
console.log(dicionario.get("bom"));