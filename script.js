// Gameboard Object
/*
  - board: 3x3 array
  - a method to get access to the board
  - a method to print the current state of the board to the console
  - a method to edit the cells on the board.
    - puts the current player's token (X or O) in the specified array index.
*/

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = Cell();
    }
  }

  const getBoard = () => board;
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  }

  return {
    getBoard,
    printBoard,
  };
}

// Cell object
/*
  - has a value (X or O)
  - a method to get the value of that cell
  - a method to edit the value of that cell
*/

function Cell() {
  // Internally, value will be 0, 1, or 2.
  // Empty = 0
  // Player One - 1 - X
  // Player Two - 2 - O
  let value = 0;

  const getValue = () => value;

  const addMark = (player) => {
    value = player;
  }

  return {
    getValue,
    addMark
  };
}

const board = Gameboard();
board.printBoard();