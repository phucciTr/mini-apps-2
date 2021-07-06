import ClosedSquare from './ClosedSquare.js';
import OpenedSquare from './OpenedSquare.js';

var Square = ({ board, row, col, handleClick, handleFlag }) => {

  let square = board[row]
    ? board[row][col]
    : { mine: false, open: true, adjMines: 0 };


  return square.open
    ? <OpenedSquare board={board} row={row} col={col}  />
    : <ClosedSquare board={board} row={row} col={col} handleClick={handleClick} handleFlag={handleFlag} />
};


export default Square;