import updateBoard from './board.js';
import mine from './../lib/mine.js';


var handleSquareClick = (row, col, board) => {
  return (dispatch) => {
    mine.openSquare(row, col, board);
    mine.openAdjSquares(row, col, board);
    dispatch(updateBoard([...board]));
  };

};

export default handleSquareClick;