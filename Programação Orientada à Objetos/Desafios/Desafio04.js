//recriar as classes de figuras geometricas utlizando herança e polimorfismo

class FormasGeometricas {
  calcularArea() {
  }
}
//classes que herdam de Formas Geometricas
class Quadrado extends FormasGeometricas {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo extends FormasGeometricas {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

class Circulo extends FormasGeometricas {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }
}

//Função criada para aceitar qualquer objeto que seja instâncias de Forma, e chmar o método calcular área
class CalculadoraDeFormas {
  static calcularArea(forma) {
    if (forma instanceof FormasGeometricas) { //instanceof testa se a propriedade do construtor aparece em em lugar lugar da cadeia de prototipos do objeto e devolve um valor booleano.
      return forma.calcularArea();
    } else {
      throw new Error("Este objeto não é uma instância de Forma, refaça a operação.");
    }
  }
}

const quadrado = new Quadrado(5, 5);
const triangulo = new Triangulo(4, 6);
const circulo = new Circulo(3);

console.log(CalculadoraDeFormas.calcularArea(quadrado));
console.log(CalculadoraDeFormas.calcularArea(triangulo));
console.log(CalculadoraDeFormas.calcularArea(circulo));
