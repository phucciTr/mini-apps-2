import ClosedSquare from './ClosedSquare.js';
import OpenedSquare from './OpenedSquare.js';

var Square = ({ board, row, col, handleClick }) => {

  let square = board[row]
    ? board[row][col]
    : { mine: false, open: true, adjMines: 0 };


  return square.open
    ? <OpenedSquare board={board} open={true} row={row} col={col} handleClick={handleClick} />
    : <ClosedSquare board={board} row={row} col={col} handleClick={handleClick} />

  // return square.mine
  //   ? <td onClick={(e) => handleClick(row, col, board)}> x </td>
  //   : <td onClick={(e) => handleClick(row, col, board)}></td>;
};


export default Square;