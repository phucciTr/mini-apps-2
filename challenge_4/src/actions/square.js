import updateBoard from './board.js';
import mine from './../lib/mine.js';


var handleSquareClick = (row, col, board) => {
  return (dispatch) => {
    if (!mine.isOver) {
      mine.openSquare(row, col, board);
      mine.openAdjSquares(row, col, board);
      dispatch(updateBoard([...board]));
    }
  };

};

var handleRightClick = (row, col, board) => {
  return (dispatch) => {
    if (!mine.isOver) {
      console.log('flag at ', row, col);
      mine.toggleFlag(row, col, board);
      dispatch(updateBoard([...board]));
    }
  };
};

export { handleSquareClick, handleRightClick }
// export default handleSquareClick;