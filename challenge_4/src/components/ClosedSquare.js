var ClosedSquare = ({ board, row, col, handleClick, handleFlag }) => {
  let square = board[row]
    ? board[row][col]
    : { mine: false, open: false, flag: false, mineCounts: 0 };

  let flagSrc = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-flag-icon-in-neon-style-png-image_5272524.jpg';
  let flag = <img className='flag' alt={flagSrc} src={flagSrc}></img>


  return square.flag
    ? <td onClick={(e) => handleClick(row, col, board)}  onContextMenu={(e) => {e.preventDefault(); handleFlag(row, col, board)}}> {flag} </td>
    : <td onClick={(e) => handleClick(row, col, board)}  onContextMenu={(e) => {e.preventDefault(); handleFlag(row, col, board)}}> </td>;

  // return square.mine
  //   ? <td onClick={(e) => handleClick(row, col, board)} onContextMenu={(e) => {e.preventDefault(); handleFlag(row, col, board)}}> x </td>
  //   : square.flag
  //     ? <td onClick={(e) => handleClick(row, col, board)}  onContextMenu={(e) => {e.preventDefault(); handleFlag(row, col, board)}}> {flag} </td>
  //     : <td onClick={(e) => handleClick(row, col, board)}  onContextMenu={(e) => {e.preventDefault(); handleFlag(row, col, board)}}> </td>
}

export default ClosedSquare;