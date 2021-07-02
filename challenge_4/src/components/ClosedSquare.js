var ClosedSquare = ({ board, row, col, handleClick }) => {
  let square = board[row]
  ? board[row][col]
  : { mine: false, open: false };

  return square.mine
    ? <td> x </td>
    : <td onClick={(e) => handleClick(row, col, board)}></td>;
}

export default ClosedSquare;