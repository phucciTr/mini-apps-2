var ClosedSquare = ({ board, row, col, handleClick }) => {
  let square = board[row]
  ? board[row][col]
  : { mine: false, open: false };

  return <td onClick={(e) => handleClick(row, col, board)}></td>;

  // return square.mine
  //   ? <td onClick={(e) => handleClick(row, col, board)}> x </td>
  //   : <td onClick={(e) => handleClick(row, col, board)}></td>;
}

export default ClosedSquare;