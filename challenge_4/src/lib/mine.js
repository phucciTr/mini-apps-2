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

  openSquare: (row, col, board) => {
    if (board[row] && board[row][col]) {
      if (board[row][col].mine) { return; }
      board[row][col].open = true;
      board[row][col].mineCounts = mine.countAdjMines(row, col, board);
    }
  },

  openTops: (row, col, board) => {
    let isAdj = false;

      for (let j = row; j < board.length; j++) {
        for (let c = col; c < board.length; c++) {
          mine.openSquare(j, c, board);
          if (mine.isAdjacent(j, c, board)) { isAdj = true; }
          break;
        }

        for (let c = col; c >= 0; c--) {
          mine.openSquare(j, c, board);
          if (mine.isAdjacent(j, c, board)) { isAdj = true; }
          break;
        }

        if (isAdj) { break; }
      }
  },

  openBottoms: (row, col, board) => {
    let isAdj = false;

    for (let j = row; j > -1; j--) {
      for (let c = col; c < board.length - 1; c++) {
        mine.openSquare(j, c, board);
        if (mine.isAdjacent(j, c, board)) { isAdj = true; }
        break;
      }

      for (let c = col; c >= 0; c--) {
        mine.openSquare(j, c, board);
        if (mine.isAdjacent(j, c, board)) { isAdj = true; }
        break;
      }

      if (isAdj) { break; }

    }
  },

  openAdjSquares: (row, col, board) => {
    if (board[row][col].mineCounts === 0) {
      return mine.traverseAdjCoords((current) => {
        let adjRow = row + current[0];
        let adjCol = col + current[1];

        mine.openTops(adjRow, adjCol, board);
        mine.openBottoms(adjRow, adjCol, board);
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