//Crie uma classe círculo que tenha os seguintes atributos:
//raio: o raio do círculo.
//Além disso, crie os seguintes métodos estáticos
//calcularArea(raio): retorna a área do círculo
//calcularCircurferencia(raio): retorna a circurferencia do circulo

class Circulo {
  static calcularArea(raio) {
    return Math.PI * Math.pow(raio, 2);
  }
  static calcularCircunferencia(raio) {
    return 2 * Math.PI * raio;
  }
}

const raioDoCirculo = 5;

console.log(Circulo.calcularArea(raioDoCirculo)); 
console.log(Circulo.calcularCircunferencia(raioDoCirculo)); 
