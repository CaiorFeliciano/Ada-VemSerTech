function adicionarNumero(contadorId) {
  let contadorSoma = document.getElementById(contadorId);

  contadorSoma.value = parseInt(contadorSoma.value) + 1;
}

function subtrairNumero(contadorId) {
  let contadorSub = document.getElementById(contadorId);

  contadorSub.value = Math.max(0, parseInt(contadorSub.value) - 1);
}
