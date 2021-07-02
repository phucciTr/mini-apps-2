import _ from 'lodash';


let mineCounts = 0;

const generateSquare = (row) => {
  let square = { mine: false, open: false, adjMines: 0, mineCounts: 0 };

  if (row === 7 && mineCounts < 10) {
    square.mine = Math.random() < 0.5 ? true : false;
    if (square.mine) { mineCounts++; }
    return square;
  }

  if (mineCounts < 10) {
    square.mine = Math.random() < 0.1 ? true : false;
    if (square.mine) { mineCounts++; }
    return square;
  }

  return square;
}



const mine = {
  init: () => {
    mineCounts = 0;
    return _.range(10).map((row) =>
      _.range(10).map((col) => generateSquare(row)));
  },

  isOver: false,

  traverseAdjCoords: (cb) => {
    let coordinates = [
      [-1, -1], [-1, 0],
      [-1, 1], [0, 1],
      [1, 1], [1, 0],
      [1, -1], [0, -1]
    ]

    coordinates.forEach((current) => {
      cb(current);
    });
  },

  endGame: (board) => {
    mine.isOver = true;

    board.forEach((row, r) =>
      row.forEach((col, c) =>
        board[r][c].mine
          ? board[r][c].open = true
          : null));
  },

  openSquare: (row, col, board) => {
    if (board[row] && board[row][col]) {
      board[row][col].open = true;
      if (board[row][col].mine) { return mine.endGame(board); }
      board[row][col].mineCounts = mine.countAdjMines(row, col, board);
    }
  },

  revealSquare: (row, col, board) => {
    if (board[row] && board[row][col]) {
      if (board[row][col].mine) { return; }
      board[row][col].open = true;
      board[row][col].mineCounts = mine.countAdjMines(row, col, board);
    }
  },

  openBottoms: (row, col, board) => {
    let isAdj = false;
    let visitedLastRow = false;

      for (let j = row; j < board.length; j++) {
        for (let c = col; c < board.length; c++) {
          mine.revealSquare(j, c, board);
          if (mine.isAdjacent(j + 1, c, board)) {
            isAdj = true;
            break;
          }
        }

        for (let c = col; c > -1; c--) {
          mine.revealSquare(j, c, board);
          if (mine.isAdjacent(j + 1, c, board)) {
            isAdj = true;
            break;
          }
        }

        if (visitedLastRow) { return; }
        if (isAdj) { visitedLastRow = true; }
      }
  },

  openTops: (row, col, board) => {
    let isAdj = false;
    let visitedLastRow = false;

    for (let j = row; j > -1; j--) {
      for (let c = col; c < board.length; c++) {
        mine.revealSquare(j, c, board);
        if (mine.isAdjacent(j - 1, c, board)) {
          isAdj = true;
          break;
        }
      }

      for (let c = col; c > -1; c--) {
        mine.revealSquare(j, c, board);
        if (mine.isAdjacent(j - 1, c, board)) {
          isAdj = true;
          break;
        }
      }

      if (visitedLastRow) { return; }
      if (isAdj) { visitedLastRow = true; }

    }
  },

  openAdjSquares: (row, col, board) => {
    if (!board[row][col].mine && board[row][col].mineCounts === 0) {
      return mine.traverseAdjCoords((current) => {
        let adjRow = row + current[0];
        let adjCol = col + current[1];

        mine.openBottoms(adjRow, adjCol, board);
        mine.openBottoms(adjRow + 1, adjCol, board);
        mine.openBottoms(adjRow - 1, adjCol, board);
        mine.openBottoms(adjRow, adjCol + 1, board);
        mine.openBottoms(adjRow, adjCol - 1, board);

        mine.openTops(adjRow, adjCol, board);
        mine.openTops(adjRow + 1, adjCol, board);
        mine.openTops(adjRow - 1, adjCol, board);
        mine.openTops(adjRow, adjCol + 1, board);
        mine.openTops(adjRow, adjCol - 1, board);
      });
    }

  },

  countAdjMines: (row, col, board) => {
    let mineCounts = 0;

    mine.traverseAdjCoords((current) => {
      let adjRow = row + current[0];
      let adjCol = col + current[1];

      if (board[adjRow] && board[adjRow][adjCol]) {
        if (board[adjRow][adjCol].mine) { mineCounts++; }
      }
    })

    return mineCounts;
  },

  isAdjacent: (row, col, board) => {
    let mineCounts = mine.countAdjMines(row, col, board);
    return mineCounts > 0;
  }
};


export default mine;