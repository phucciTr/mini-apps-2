var OpenedSquare = ({ open, board, row, col, handleClick }) => {
  let mineCounts = board[row] && board[row][col]
    ? board[row][col].mineCounts
    : 0;

  return (
    <td>
      {mineCounts > 0 && mineCounts}
      {mineCounts <= 0 && <div className="blank"></div> }
    </td>
  )
};

export default OpenedSquare;