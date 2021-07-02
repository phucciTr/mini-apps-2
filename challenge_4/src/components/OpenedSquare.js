var OpenedSquare = ({ open, board, row, col, handleClick }) => {
  let mineCounts = 0;
  let isMine = false;

  if (board[row] && board[row][col]) {
    mineCounts = board[row][col].mineCounts;
    if (board[row][col].mine) { isMine = true; }
  }

  return (
    <td>
      {isMine && 'x'}
      {!isMine && mineCounts > 0 && mineCounts}
      {!isMine && mineCounts <= 0 && <div className="blank"></div> }
    </td>
  )
};

export default OpenedSquare;