import { connect } from 'react-redux';
import Square from './../components/Square.js';
import { handleSquareClick, handleRightClick } from './../actions/square.js';


var mapStateToProps = (state) => ({
  board: state.board
});

var mapDispatchToProps = (dispatch) => ({
  handleClick: (row, col, board) => {
    dispatch(handleSquareClick(row, col, board));
  },
  handleFlag: (row, col, board) => {
    dispatch(handleRightClick(row, col, board));
  }
});

var SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Square);


export default SquareContainer;