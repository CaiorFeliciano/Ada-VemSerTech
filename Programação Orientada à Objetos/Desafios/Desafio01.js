//Crie uma classe MathUtils que tenha os seguintes métodos estáticos:
//sum(a,b): soma dos números
//sub(a,b): subtração dos números
//mul(a,b): retorna o produto dos dois números
//div(a,b): retorna a divisão dos dois números

class MathUtils {
  static sum(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
  static mul(a, b) {
    return a * b;
  }
  static div(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error("Erro: Divisão por zero não é permitida.");
      return undefined;
    }
  }
}

console.log(MathUtils.sum(5, 3));
console.log(MathUtils.sub(5, 3));
console.log(MathUtils.mul(5, 3));
console.log(MathUtils.div(6, 2));
console.log(MathUtils.div(6, 0));
