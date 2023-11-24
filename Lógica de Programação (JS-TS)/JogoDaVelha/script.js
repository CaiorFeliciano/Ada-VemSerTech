let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOn = true;


//CHECANDO AS CONDIÇÕES DE VITÓRIA
function checkWinner() {
  const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  //Usando for of para percorre o objeto e ver as combinações
  for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
      }
  }
  return false;
}

//MARCAÇÕES DAS CASAS
function clickHandler(index) {
    if (gameBoard[index] === '' && gameOn) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('square')[index].innerText = currentPlayer;

        if (checkWinner()) {
            alert(`Player ${currentPlayer} venceu!`);
            gameOn = false;
        } else if (gameBoard.every(square => square !== '')) {
            alert('Empate!');
            gameOn = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

//RECOMEÇANDO O JOGO
function restart() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];

  const squares = document.getElementsByClassName('square'); //achando os quadrados e voltando eles em branco
  for (let square of squares) {
      square.innerText = '';
  }
  //voltando jogar X para inicial e jogo como true
  currentPlayer = 'X';
  gameOn = true;
}
