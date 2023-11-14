// 06 - Faça um mecanismo de busca dentro de um array.

// [1,2,3,4,5,6,7,8,9,10] 

// Achei o numero 7


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let achar = 7;
let encontrado = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === achar) {
    encontrado = true;
    break;
  }
}

encontrado ? console.log("Achei!") : console.log("Não achei!");

//USANDO FOR IN

for (let item of array) {
  if (item === achar) {
    encontrado = true;
  }
}

encontrado ? console.log("Achei") : console.log("Não achei!");
