// 09 - Criar um algoritmo de ordenação de arrays;

// 09.01 - Método que faz isso (Achar o método que ordena os arrays)

//METODO SORT
let array = [3,5,9,1,4,7,2,8,6];

array.sort((a,b) => a-b);

// console.log(array)

//MECANISMO 

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++){
      if(array[j] > array[j + 1]){
        let numero = array[j];
        array[j] = array[j + 1];
        array[j + 1] = numero;
      }
    }
}

console.log(array)
