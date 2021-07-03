var OpenedSquare = ({ board, row, col }) => {
  let mineCounts = 0;
  let isMine = false;

  if (board[row] && board[row][col]) {
    mineCounts = board[row][col].mineCounts;
    if (board[row][col].mine) { isMine = true; }
  }

  return (
    <td>
      {isMine && <img id='bomb' alt='x' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRa3p3cGbWigVoc-XLzD5l1iexw3okeltitZFNGkWWYxYboCQtpqRVXViyoxyn6BkTMQ4&usqp=CAU'/> }
      {!isMine && mineCounts > 0 && mineCounts}
      {!isMine && mineCounts <= 0 && <div className="blank"></div> }
    </td>
  )
};

export default OpenedSquare;