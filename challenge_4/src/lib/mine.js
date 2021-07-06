import _ from 'lodash';
import { changeWinStatus, changeLevel } from './../actions/app.js';

import { changeBoard, changeBoardSize } from './../actions/board.js';
import { changeLostStatus } from './../actions/app.js';

import store from './../store/store.js';

let totalMines;
let mineCounts = 0;
let levels = [10, 15, 20, 35, 40, 45, 50];

const generateSquare = (row) => {
  let square = { mine: false, open: false, flag: false, mineCounts: 0 };

  if (row === 7 && mineCounts < totalMines) {
    square.mine = Math.random() < 0.07 * totalMines ? true : false;
    if (square.mine) { mineCounts++; }
    return square;
  }

  if (mineCounts < totalMines) {
    square.mine = Math.random() < 0.01 * totalMines ? true : false;
    if (square.mine) { mineCounts++; }
    return square;
  }

  return square;
}

const mine = {
  init: (currentLevel) => {
    mineCounts = 0;
    totalMines = levels[currentLevel - 1];
    console.log("totalMines ", totalMines);

    let board = _.range(10).map((row) =>
      _.range(10).map((col) => generateSquare(row)));

    store.dispatch(changeBoardSize(10));
    store.dispatch(changeLevel(currentLevel))

    mine.squareToOpens = 100 - mineCounts;
    console.log('mineCounts = ', mineCounts);
    console.log('mine.squareToOpens = ', mine.squareToOpens);

    if (mine.level > 1) {
      mine.isOver = false;
      store.dispatch(changeLostStatus(false));
      store.dispatch(changeWinStatus(false))
      return store.dispatch(changeBoard(board));
    }
    return board;
  },

  level: 1,
  squareToOpens: 0,
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
    store.dispatch(changeLostStatus(true));

    board.forEach((row, r) =>
      row.forEach((col, c) =>
        board[r][c].mine
          ? board[r][c].open = true
          : null));
  },

  openSquare: (row, col, board) => {
    if (board[row] && board[row][col]) {
      if (board[row][col].mine) { return mine.endGame(board); }
      board[row][col].mineCounts = mine.countAdjMines(row, col, board);
    }
  },

  toggleFlag: (row, col, board) => {
    if (board[row] && board[row][col]) {
      board[row][col].flag = !board[row][col].flag ? true : false;
    }
  },

  revealSquare: (row, col, board) => {
    if (board[row] && board[row][col]) {
      if (board[row][col].mine) { return; }
      board[row][col].open = true;
      mine.squareToOpens--;
      return board[row][col].mineCounts = mine.countAdjMines(row, col, board);
    }
  },


  openAdjSquares: (row, col, board) => {
      if (row < 0 || row > board.length - 1  || col < 0 || col > board.length - 1) { return; }
      if (board[row][col].open) { return; }

      mine.revealSquare(row, col, board);

      if (mine.squareToOpens === 0) {
        store.dispatch(changeWinStatus(true));
        return mine.isOver = true;
      }

      if (board[row][col].mine) { return; }
      if (board[row][col].mineCounts > 0) { return; }

      mine.traverseAdjCoords((current) => {
        mine.openAdjSquares(row + current[0], col + current[1], board);
      });


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
};


export default mine;