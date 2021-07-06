import { changeBoard } from './board.js';
import mine from './../lib/mine.js';


var handleSquareClick = (row, col, board) => {
  return (dispatch) => {
    if (!mine.isOver) {
      mine.openSquare(row, col, board);
      mine.openAdjSquares(row, col, board);
      dispatch(changeBoard([...board]));
    }
  };

};

var handleRightClick = (row, col, board) => {
  return (dispatch) => {
    if (!mine.isOver) {
      mine.toggleFlag(row, col, board);
      dispatch(changeBoard([...board]));
    }
  };
};

export { handleSquareClick, handleRightClick }